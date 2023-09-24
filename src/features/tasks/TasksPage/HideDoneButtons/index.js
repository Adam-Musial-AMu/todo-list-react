import { useSelector, useDispatch } from "react-redux";
import { Container, Button } from "../../Button/styled";
import {
    toggleHideDoneTasks,
    markAllTasksDone,
    selectAreTasksEmpty,
    selectIsEveryTasksDone,
    selectHideDoneTasks,
} from "../../tasksSlice";

const HideDoneButtons = () => {

    const areTasksEmpty = useSelector(selectAreTasksEmpty);
    const isEveryTasksDone = useSelector(selectIsEveryTasksDone);
    const hideDoneTasks = useSelector(selectHideDoneTasks);

    const dispatch = useDispatch();

    return (
        <Container>
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

export default HideDoneButtons;