import Form from "./Form";
import TasksList from "./TasksList";
import Buttons from "./Buttons";
import Section from "../../../common/Section";
import Header from "../../../common/Header";
import Search from "./Search";
import { Container } from "../../../common/Container/styled";


function TasksPage() {
  
  return (
    <Container>
      <Header title="Lista zadań" />
      <Section
        title="Dodaj nowe zadanie"
        content={<Form />}
      />
      <Section
        title="Wyszukiwarka"
        content={<Search />}
      />
      <Section
        title="Lista zadań"
        content={<TasksList />}
        extraHeaderContent={<Buttons />}
      />
    </Container>
  )

};

export default TasksPage;