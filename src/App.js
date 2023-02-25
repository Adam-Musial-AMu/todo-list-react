import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import Container from "./Container";
import { useState } from 'react'


function App() {
  const [hideDoneTasks, setHideDoneTasks] = useState(false);
  const [tasks, setTasks] = useState(
    [
      { id: 1, content: "przejsć na reacta", done: false },
      { id: 2, content: "zjeść obiad", done: true },
    ]
  );
  const toggleHideDoneTasks = () => setHideDoneTasks(hideDoneTasks => !hideDoneTasks);

  const removeTask = (id) => { setTasks(tasks => tasks.filter(task => task.id !== id)) };

  const toggleTaskDone = (id) => {
    setTasks(tasks => tasks.map(task => {
      if (task.id === id) {
        return { ...task, done: !task.done };
      }
      return task;
    }));
  };

  const addNewTask = (newTaskContent) => {
    setTasks(tasks =>
      [
        ...tasks,
        {
          content: newTaskContent,
          done: false,
          id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1,
        },
      ]
    )
  };


  const markAllTasksDone = () => {
    setTasks(tasks => tasks.map(task => ({ ...task, done: true })))
  };

  return (
    <Container>
      <Header title="Lista zadań" />
      <Section
        title="Dodaj nowe zadanie"
        content={<Form addNewTask={addNewTask} />}
      />
      <Section
        title="Lista zadań"
        content={<Tasks
          tasks={tasks}
          hideDoneTasks={hideDoneTasks}
          removeTask={removeTask}
          toggleTaskDone={toggleTaskDone} />}
        extraHeaderContent={<Buttons
          tasks={tasks}
          hideDoneTasks={hideDoneTasks}
          toggleHideDoneTasks={toggleHideDoneTasks}
          markAllTasksDone={markAllTasksDone}
        />}
      />
    </Container>
  )

};

export default App;