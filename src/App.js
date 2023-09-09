import { HashRouter, Route, Switch, Link, Redirect } from "react-router-dom/cjs/react-router-dom.min";
import Tasks from "./features/tasks/Tasks";
import Author from "./features/author/Author";

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
                <Route path="/zadania">
                    <Tasks />
                </Route>
                <Route path="/autor">
                    <Author />
                </Route>
                <Route path="/">
                    <Redirect to="/zadania" />
                </Route>
            </Switch>
        </HashRouter>
    )
};

export default App;