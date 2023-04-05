import "./style.css";
import { useState, useRef } from 'react';

const Form = ({ addNewTask }) => {
    const [newTaskContent, setNewTaksContent] = useState("");
    const inputRef = useRef(null);

    const onFormSubmit = (event) => {
        event.preventDefault();
        if (newTaskContent.trim() !== "") {
            addNewTask(newTaskContent.trim());
            setNewTaksContent("");
        }
    };

    const focusInput = () => inputRef.current.focus();

    return (
        <form className="form" onSubmit={onFormSubmit}>
            <input
                ref={inputRef}
                className="form__input"
                value={newTaskContent}
                onChange={(event) => setNewTaksContent(event.target.value)}
                placeholder="Co jest do zrobienia?"
                autoFocus
            />
            <button
                className="form__addButton"
                onClick={focusInput}>
                Dodaj zadanie
            </button>
        </form>
    )
};

export default Form;