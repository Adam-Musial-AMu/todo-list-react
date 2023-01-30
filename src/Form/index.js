import "./style.css";
import { useState } from 'react';

const Form = ({ addNewTask }) => {
    const [newTaskContent, setNewTaksContent] = useState("");

    const onFormSubmit = (event) => {
        event.preventDefault();
        addNewTask(newTaskContent.trim());
        setNewTaksContent("");
    }

    return (
        <form className="form" onSubmit={onFormSubmit}>
            <input
                className="form__input"
                value={newTaskContent}
                onChange={(event) => setNewTaksContent(event.target.value)}
                placeholder="Co jest do zrobienia?"
                autoFocus
            />
            <button className="form__addButton">Dodaj zadanie</button>
        </form>
    )
};

export default Form;