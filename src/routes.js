export const toAuthor = () => "/autor";
export const toTasks = () => "/zadania";

export const toTask = ({ id } = { id: ":id" }) => `/zadania/${id}`;