import "./style.css";

const Buttons = ({ tasks, hideDoneTasks, toggleHideDoneTasks, markAllTasksDone }) => (

    tasks.length > 0 && (

        <div className="buttons">
            <button
                className="buttons__button"
                onClick={toggleHideDoneTasks}>
                {hideDoneTasks ? "Pokaż" : "Ukryj"}  ukończone
            </button>
            <button
                className="buttons__button"
                onClick={markAllTasksDone}
                disabled={tasks.every(({ done }) => done)}>
                Ukończ wszystkie
            </button>
        </div>
    )
);


export default Buttons;