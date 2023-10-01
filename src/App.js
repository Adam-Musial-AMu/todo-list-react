import { HashRouter, Route, Switch, Redirect } from "react-router-dom/cjs/react-router-dom.min";
import TasksPage from "./features/tasks/TasksPage";
import TaskPage from "./features/tasks/TaskPage";
import AuthorPage from "./features/author/AuthorPage";
import { NavItem, Navigation, StyledNavLink } from "./styled";

function App() {
    return (
        <HashRouter>
            <nav>
                <Navigation>
                    <NavItem>
                        <StyledNavLink to="/zadania">
                            Zadania
                        </StyledNavLink>
                    </NavItem>
                    <NavItem>
                        <StyledNavLink to="/autor">
                            O autorze
                        </StyledNavLink>
                    </NavItem>
                </Navigation>
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