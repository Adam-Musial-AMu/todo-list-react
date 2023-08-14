import { Container, Button } from "./styled";

const Buttons = ({ tasks, hideDoneTasks, toggleHideDoneTasks, markAllTasksDone }) => (

    tasks.length > 0 && (

        <Container>
            <Button
                onClick={toggleHideDoneTasks}>
                {hideDoneTasks ? "Pokaż" : "Ukryj"}  ukończone
            </Button>
            <Button
                onClick={markAllTasksDone}
                disabled={tasks.every(({ done }) => done)}>
                Ukończ wszystkie
            </Button>
        </Container>
    )
);


export default Buttons;