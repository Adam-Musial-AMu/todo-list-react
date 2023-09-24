import Form from "./Form";
import TasksList from "./TasksList";
import HideDoneButtons from "./HideDoneButtons";
import Section from "../../../common/Section";
import Header from "../../../common/Header";
import Search from "./Search";
import { Container } from "../../../common/Container/styled";
import ExampleButton from "./ExampleButton";


function TasksPage() {
  
  return (
    <Container>
      <Header title="Lista zadań" />
      <Section
        title="Dodaj nowe zadanie"
        content={<Form />}
        extraHeaderContent={<ExampleButton />}
      />
      <Section
        title="Wyszukiwarka"
        content={<Search />}
      />
      <Section
        title="Lista zadań"
        content={<TasksList />}
        extraHeaderContent={<HideDoneButtons />}
      />
    </Container>
  )

};

export default TasksPage;