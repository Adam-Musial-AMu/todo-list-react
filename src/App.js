import { HashRouter, Route, Switch, Redirect } from "react-router-dom/cjs/react-router-dom.min";
import TasksPage from "./features/tasks/TasksPage";
import TaskPage from "./features/tasks/TaskPage";
import AuthorPage from "./features/AuthorPage";
import Navigation from "./common/Navigation";
import { toAuthor, toTask, toTasks } from "./routes";

function App() {
    return (
        <HashRouter>
            <Navigation />
            <Switch>
                <Route path={toTask()}>
                    <TaskPage />
                </Route>
                <Route path={toTasks()}>
                    <TasksPage />
                </Route>
                <Route path={toAuthor()}>
                    <AuthorPage />
                </Route>
                <Route path="/">
                    <Redirect to={toTasks()} />
                </Route>
            </Switch>
        </HashRouter>
    )
};

export default App;