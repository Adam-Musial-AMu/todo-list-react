import styled, { css } from "styled-components";

export const List = styled.ul`
    padding-left: 0;
`;

export const Item = styled.li`
    display: grid;
    grid-template-columns: auto 1fr auto;
    grid-gap: 20px;
    padding: 10px;
    border-bottom: 1px solid ${({ theme }) => theme.color.alto};
    align-items: center;

    ${({ hidden }) => hidden && css`
        display: none;
    `}
`;

export const Content = styled.span`
    word-break: break-word;

    ${({ done }) => done && css`
        text-decoration: line-through;
    `}
`;

export const Button = styled.button`
    height: 30px;
    width: 30px;
    background-color: ${({ theme }) => theme.color.crimson};
    color: white;
    border: none;
    cursor: pointer;

    &:hover {
        filter: brightness(130%);
        transition: 1s; 
    }

    &:active {
        filter: brightness(130%);
        border: 3px solid ${({ theme }) => theme.color.black};
    }

    ${({ done }) => done && css`
        background-color: ${({ theme }) => theme.color.forestGreen};

        &:hover {
            filter: brightness(130%); 
        }

        &:active {
            filter: brightness(150%);
            border: 3px solid ${({ theme }) => theme.color.black};
        }
    `};
`;