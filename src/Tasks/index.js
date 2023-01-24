import "./style.css";

const Tasks = (props) => (
    <ul className="section__list">
        {props.tasks.map(task => (
            <li
                className={`list${task.done && props.hideDoneTasks ? " list--hidden" : ""}`}
                key={task.id}>
                <button className="list__button list__button--done">
                    {task.done ? "✔" : ""}
                </button>
                <span className={`list__taskName${task.done ? " list__taskName--done" : ""}`}>
                    {task.content}
                </span>
                <button className="list__button">
                    🗑
                </button>
            </li>
        ))}
    </ul >
);

export default Tasks;