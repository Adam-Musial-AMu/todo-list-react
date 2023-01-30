import "./style.css";

const Buttons = ({ tasks, hideDoneTasks, toggleHideDoneTasks }) => (

    tasks.length > 0 && (

        <div className="buttons">
            <button
                className="buttons__button"
                onClick={toggleHideDoneTasks}>
                {hideDoneTasks ? "Pokaż" : "Ukryj"}  ukończone
            </button>
            <button
                className="buttons__button"
                disabled={tasks.every(({ done }) => done)}>
                Ukończ wszystkie
            </button>
        </div>
    )
);


export default Buttons;