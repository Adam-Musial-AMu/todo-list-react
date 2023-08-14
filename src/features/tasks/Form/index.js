import { DataInput, Input, Button } from "./styled";
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
        <DataInput onSubmit={onFormSubmit}>
            <Input
                ref={inputRef}
                value={newTaskContent}
                onChange={(event) => setNewTaksContent(event.target.value)}
                placeholder="Co jest do zrobienia?"
                autoFocus
            />
            <Button
                onClick={focusInput}>
                Dodaj zadanie
            </Button>
        </DataInput>
    )
};

export default Form;