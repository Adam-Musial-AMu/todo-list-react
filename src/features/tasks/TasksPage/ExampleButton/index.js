import { useDispatch } from "react-redux";
import { Container, Button } from "../../Button/styled";

import {
    fetchExampleTasks
} from "../../tasksSlice";

const ExampleButton = () => {

    const dispatch = useDispatch();

    return (
        <Container>
            <Button
                onClick={() => dispatch(fetchExampleTasks())}>
                Pobierz przykładowe zadania
            </Button>
        </Container>
    )
}

export default ExampleButton;