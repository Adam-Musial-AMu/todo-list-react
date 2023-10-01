import { NavLink } from "react-router-dom/cjs/react-router-dom";
import styled from "styled-components";


export const StyledNavLink = styled(NavLink)`
    color: white;
    text-decoration: none;
    &.active{
      font-weight: 700;
    } ;
`;

export const Navigation = styled.ul`
    display: flex;
    align-items: center;
    gap: 20px;
    background-color: ${({ theme }) => theme.color.teal};
    padding: 20px;
    list-style-type: none;

    @media (max-width: 767px) {
      flex-direction: column;
    }
`;

export const NavItem = styled.li`
  &:first-child {
    margin-left: auto;
  }

  &:last-child {
    margin-right: auto; 
  }


  @media (max-width: 767px ) {
    &:first-child {
      margin: auto;
    }
  
    &:last-child {
      margin: auto; 
    }
  }
`;  