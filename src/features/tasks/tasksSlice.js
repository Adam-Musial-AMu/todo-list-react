import { createSlice } from '@reduxjs/toolkit';

const tasksSlice = createSlice({
    name: 'tasks',
    initialState: {
        tasks: [],
        hideDoneTasks: false,
    },
    reducers: {
        addTask: ({ tasks }, { payload }) => {
            tasks.push(payload);
        },

        toggleHideDoneTasks: state => {
            state.hideDoneTasks = !state.hideDoneTasks;
        },

        toggleTaskDone: (state, action) => {
            const index = state.tasks.findIndex(task => task.id === action.payload);
            state.tasks[index].done = !state.tasks[index].done;
        },

        removeTask: (state, action) => {
            const index = state.tasks.findIndex(task => task.id === action.payload);
            state.tasks.splice(index, 1);
        },

        markAllTasksDone: (state) => {
            state.tasks.forEach(task => {
                task.done = true;
            });
        },
    },
});

export const { addTask, toggleHideDoneTasks, toggleTaskDone, removeTask, markAllTasksDone } = tasksSlice.actions;
export const selectTasks = state => state.tasks;
export default tasksSlice.reducer;