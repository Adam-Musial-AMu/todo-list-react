import { Div, Button } from "./styled";

const Buttons = ({ tasks, hideDoneTasks, toggleHideDoneTasks, markAllTasksDone }) => (

    tasks.length > 0 && (

        <Div>
            <Button
                onClick={toggleHideDoneTasks}>
                {hideDoneTasks ? "Pokaż" : "Ukryj"}  ukończone
            </Button>
            <Button
                onClick={markAllTasksDone}
                disabled={tasks.every(({ done }) => done)}>
                Ukończ wszystkie
            </Button>
        </Div>
    )
);


export default Buttons;