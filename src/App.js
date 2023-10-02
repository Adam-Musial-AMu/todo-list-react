import { HashRouter, Route, Switch, Redirect } from "react-router-dom/cjs/react-router-dom.min";
import TasksPage from "./features/tasks/TasksPage";
import TaskPage from "./features/tasks/TaskPage";
import AuthorPage from "./features/AuthorPage";
import Navigation from "./common/Navigation";

function App() {
    return (
        <HashRouter>
            <Navigation />
            <Switch>
                <Route path="/zadania/:id">
                    <TaskPage />
                </Route>
                <Route path="/zadania">
                    <TasksPage />
                </Route>
                <Route path="/autor">
                    <AuthorPage />
                </Route>
                <Route path="/">
                    <Redirect to="/zadania" />
                </Route>
            </Switch>
        </HashRouter>
    )
};

export default App;