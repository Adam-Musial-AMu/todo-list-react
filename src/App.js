import { HashRouter, Route, Switch, Link, Redirect } from "react-router-dom/cjs/react-router-dom.min";
import TasksPage from "./features/tasks/TasksPage";
import TaskPage from "./features/tasks/TaskPage";
import AuthorPage from "./features/author/AuthorPage";

function App() {
    return (
        <HashRouter>
            <nav>
                <ul>
                    <li>
                        <Link to="/zadania">
                            Zadania
                        </Link>
                    </li>
                    <li>
                        <Link to="/autor">
                            O autorze
                        </Link>
                    </li>
                </ul>
            </nav>
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