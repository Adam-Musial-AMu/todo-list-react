import { createSlice } from '@reduxjs/toolkit';

const tasksSlice = createSlice({
    name: 'tasks',
    initialState: {
        tasks: [],
        hideDoneTasks: false,
    },
    reducers: {
        addTask: ({ tasks }, { payload: task }) => {
            tasks.push(task);
        },

        toggleHideDoneTasks: state => {
            state.hideDoneTasks = !state.hideDoneTasks;
        },

        toggleTaskDone: ({ tasks }, { payload: taskId }) => {
            const index = tasks.findIndex(({id}) => id === taskId);
            tasks[index].done = !tasks[index].done;
        },

        removeTask: ({ tasks }, { payload: taskId }) => {
            const index = tasks.findIndex(({id}) => id === taskId);
            tasks.splice(index, 1);
        },

        markAllTasksDone: ({tasks}) => {
            tasks.forEach(task => {
                task.done = true;
            });
        },
    },
});

export const { addTask, toggleHideDoneTasks, toggleTaskDone, removeTask, markAllTasksDone } = tasksSlice.actions;
export const selectTasks = state => state.tasks;
export default tasksSlice.reducer;