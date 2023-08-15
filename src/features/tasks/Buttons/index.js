import { useSelector, useDispatch } from "react-redux";
import { Container, Button } from "./styled";
import { selectTasks, toggleHideDoneTasks, markAllTasksDone } from "../tasksSlice";

const Buttons = () => {

    const { tasks, hideDoneTasks } = useSelector(selectTasks);
    const dispatch = useDispatch();

    return (
        tasks.length > 0 && (

            <Container>
                <Button
                    onClick={() => dispatch(toggleHideDoneTasks())}>
                    {hideDoneTasks ? "Pokaż" : "Ukryj"}  ukończone
                </Button>
                <Button
                    onClick={() => dispatch(markAllTasksDone())}
                    disabled={tasks.every(({ done }) => done)}>
                    Ukończ wszystkie
                </Button>
            </Container>
        )
    )

};





export default Buttons;