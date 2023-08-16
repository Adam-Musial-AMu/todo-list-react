import { useSelector, useDispatch } from "react-redux";
import { selectTasks, toggleTaskDone, removeTask, selectHideDoneTasks } from "../tasksSlice";
import { List, Item, Content, Button } from "./styled";


const TasksList = () => {

    const tasks = useSelector(selectTasks);
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
                        {task.content}
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