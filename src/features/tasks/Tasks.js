import Form from "./Form";
import TasksList from "./TasksList";
import Buttons from "./Buttons";
import Section from "../../common/Section";
import Header from "../../common/Header";
import { Container } from "../../common/Container/styled";
import { useTasks } from "../../useTasks";


function Tasks() {
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
        content={<TasksList
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

export default Tasks;