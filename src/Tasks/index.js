import { List, Item, Content, Button } from "./styled";

const Tasks = ({ tasks, removeTask, hideDoneTasks, toggleTaskDone }) => (
    <List>
        {tasks.map(task => (
            <Item
                hidden={task.done && hideDoneTasks}
                key={task.id}>
                <Button
                    done
                    onClick={() => toggleTaskDone(task.id)}
                >
                    {task.done ? "✔" : ""}
                </Button>
                <Content done={task.done}>
                    {task.content}
                </Content>
                <Button onClick={() => removeTask(task.id)}>
                    🗑
                </Button>
            </Item>
        ))}
    </List >
);

export default Tasks;