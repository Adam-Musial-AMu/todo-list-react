import { useSelector, useDispatch } from "react-redux";
import { Container, Button } from "./styled";
import {
    toggleHideDoneTasks,
    markAllTasksDone,
    selectAreTasksEmpty,
    selectIsEveryTasksDone,
    selectHideDoneTasks,
    fetchExampleTasks
} from "../../tasksSlice";

const Buttons = () => {

    const areTasksEmpty = useSelector(selectAreTasksEmpty);
    const isEveryTasksDone = useSelector(selectIsEveryTasksDone);
    const hideDoneTasks = useSelector(selectHideDoneTasks);

    const dispatch = useDispatch();

    return (
        <Container>
            <Button
                onClick={() => dispatch(fetchExampleTasks())}>
                Pobierz przykładowe zadania
            </Button>
            {!areTasksEmpty && (
                <>
                    <Button
                        onClick={() => dispatch(toggleHideDoneTasks())}>
                        {hideDoneTasks ? "Pokaż" : "Ukryj"}  ukończone
                    </Button>
                    <Button
                        onClick={() => dispatch(markAllTasksDone())}
                        disabled={isEveryTasksDone}>
                        Ukończ wszystkie
                    </Button>
                </>)}
        </Container>
    )
}

export default Buttons;