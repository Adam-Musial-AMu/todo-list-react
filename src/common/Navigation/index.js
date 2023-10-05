import { toAuthor, toTasks } from "../../routes";
import { Nav, NavItem, StyledNavLink } from "./styled";


const Navigation = () => (
    <nav>
        <Nav>
            <NavItem>
                <StyledNavLink to={toTasks()}>
                    Zadania
                </StyledNavLink>
            </NavItem>
            <NavItem>
                <StyledNavLink to={toAuthor()}>
                    O autorze
                </StyledNavLink>
            </NavItem>
        </Nav>
    </nav>
)

export default Navigation;