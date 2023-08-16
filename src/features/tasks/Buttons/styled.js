import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

export const Button = styled.button`
    border: none;
    margin: 0 0 0 20px;
    color: ${({ theme }) => theme.color.teal};
    background-color: transparent;
    transition: 1s;
    cursor: pointer;

    &:hover {
        filter: brightness(130%); 
    }

    &:active {
        filter: brightness(150%);
    }

    &:disabled {
        color: ${({ theme }) => theme.color.silver};
        cursor: auto;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        flex-basis: 100%;
        margin: 10px;
    }
`;

