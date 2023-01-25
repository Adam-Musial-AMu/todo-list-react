import "./style.css";

const Tasks = (props) => (
    <ul className="tasks">
        {props.tasks.map(task => (
            <li
                className={`tasks__list${task.done && props.hideDoneTasks ? " tasks__list--hidden" : ""}`}
                key={task.id}>
                <button className="tasks__button tasks__button--done">
                    {task.done ? "✔" : ""}
                </button>
                <span className={`tasks__taskName${task.done ? " tasks__taskName--done" : ""}`}>
                    {task.content}
                </span>
                <button className="tasks__button">
                    🗑
                </button>
            </li>
        ))}
    </ul >
);

export default Tasks;