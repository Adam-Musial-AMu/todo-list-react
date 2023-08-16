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
            const index = tasks.findIndex(({ id }) => id === taskId);
            tasks[index].done = !tasks[index].done;
        },

        removeTask: ({ tasks }, { payload: taskId }) => {
            const index = tasks.findIndex(({ id }) => id === taskId);
            tasks.splice(index, 1);
        },

        markAllTasksDone: ({ tasks }) => {
            tasks.forEach(task => {
                task.done = true;
            });
        },
    },
});

export const {
    addTask,
    toggleHideDoneTasks,
    toggleTaskDone,
    removeTask,
    markAllTasksDone,
} = tasksSlice.actions;

const selectTasksState = state => state.tasks;

export const selectTasks = state => selectTasksState(state).tasks;
export const selectHideDoneTasks = state => selectTasksState(state).hideDoneTasks;
export const selectAreTasksEmpty = state => selectTasks(state).length === 0;
export const selectIsEveryTasksDone = state => selectTasks(state).every(({ done }) => done);


export default tasksSlice.reducer;