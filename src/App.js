import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import Container from "./Container";
import { useTasks } from "./useTasks";


function App() {
  const { tasks, hideDoneTasks, toggleHideDoneTasks, removeTask, addNewTask, toggleTaskDone, markAllTasksDone } = useTasks();
  
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