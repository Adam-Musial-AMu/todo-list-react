import { useDispatch, useSelector } from "react-redux";
import { Container, Button } from "../../Button/styled";

import {
    fetchExampleTasks, selectIsLoading,
} from "../../tasksSlice";


const ExampleButton = () => {

    const dispatch = useDispatch();
    const isLoading = useSelector(selectIsLoading);

    return (
        <Container>
            <Button
                disabled={isLoading}
                onClick={() => dispatch(fetchExampleTasks())}>
                {isLoading ? "Ładowanie..." : "Pobierz przykładowe zadania"}
            </Button>
        </Container>
    )
}

export default ExampleButton;