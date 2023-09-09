const localStorageKey = "tasks";

export const saveTasksInLocaleStorage = tasks =>
    localStorage.setItem(localStorageKey, JSON.stringify(tasks));

export const getTasksFromLocaleStorage = () =>
    JSON.parse(localStorage.getItem(localStorageKey)) || [];