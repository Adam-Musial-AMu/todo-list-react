import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom/cjs/react-router-dom";
import { selectTaskByQuery, toggleTaskDone, removeTask, selectHideDoneTasks } from "../../tasksSlice";
import { List, Item, Content, Button, StyledLink } from "./styled";
import searchQueryParamName from "../searchQueryParamName";
import { toTask } from "../../../../routes";


const TasksList = () => {

    const location = useLocation();
    const query = new URLSearchParams(location.search).get(searchQueryParamName);

    const tasks = useSelector(state => selectTaskByQuery(state, query));
    const hideDoneTasks = useSelector(selectHideDoneTasks);

    const dispatch = useDispatch();

    return (
        <List>
            {tasks.map(task => (
                <Item
                    hidden={task.done && hideDoneTasks}
                    key={task.id}>
                    <Button
                        done
                        onClick={() => dispatch(toggleTaskDone(task.id))}>
                        {task.done ? "✔" : ""}
                    </Button>
                    <Content done={task.done}>
                        <StyledLink to={toTask({ id: task.id })}>{task.content}</StyledLink>
                    </Content>
                    <Button onClick={() => dispatch(removeTask(task.id))}>
                        🗑
                    </Button>
                </Item>
            ))}
        </List >
    );
}

export default TasksList;