import { DataInput, Input, Button } from "./styled";
import { useState, useRef } from 'react';
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { addTask } from "../tasksSlice";

const Form = () => {
    const [newTaskContent, setNewTaksContent] = useState("");
    const inputRef = useRef(null);

    const dispatch = useDispatch();

    const onFormSubmit = (event) => {
        event.preventDefault();
        if (newTaskContent.trim() !== "") {

            dispatch(addTask({
                content: newTaskContent.trim(),
                done: false,
                id: nanoid(),
            }));

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