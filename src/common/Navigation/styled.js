import { NavLink } from "react-router-dom/cjs/react-router-dom";
import styled from "styled-components";


export const StyledNavLink = styled(NavLink)`
    color: white;
    text-decoration: none;

    &:hover {
        border-bottom: 1px solid;
    }

    &.active {
      font-weight: 700;
    } ;
`;

export const Nav = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.color.teal};
    margin: 0;
    list-style-type: none;

    @media (max-width: 767px) {
      flex-direction: column;
    }
`;

export const NavItem = styled.li`
    margin: 20px;

    @media (max-width: 767px ) {
      margin: 10px;
    }
`;  