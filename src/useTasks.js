import { useState, useEffect } from "react";

export const useTasks = () => {
    const [tasks, setTasks] = useState(
        JSON.parse(localStorage.getItem("tasks")) || []
    );

    const [hideDoneTasks, setHideDoneTasks] = useState(false);

    const toggleHideDoneTasks = () => setHideDoneTasks(hideDoneTasks => !hideDoneTasks);

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

    const removeTask = (id) => { setTasks(tasks => tasks.filter(task => task.id !== id)) };

    const toggleTaskDone = (id) => {
        setTasks(tasks => tasks.map(task =>
            task.id === id ? { ...task, done: !task.done } : task)
        );
    };

    const addNewTask = (newTaskContent) => {
        setTasks(tasks =>
            [
                ...tasks,
                {
                    content: newTaskContent,
                    done: false,
                    id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1,
                },
            ]
        )
    };

    const markAllTasksDone = () => {
        setTasks(tasks => tasks.map(task => ({ ...task, done: true })))
    };


    return { tasks, hideDoneTasks, toggleHideDoneTasks, removeTask, addNewTask, toggleTaskDone, markAllTasksDone };
}