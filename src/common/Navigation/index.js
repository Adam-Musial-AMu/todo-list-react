import { Nav, NavItem, StyledNavLink } from "./styled";


const Navigation = () => (
    <nav>
                <Nav>
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
                </Nav>
            </nav>
)

export default Navigation;