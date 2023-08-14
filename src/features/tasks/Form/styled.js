import styled from "styled-components";

export const DataInput = styled.form`
    display: grid;
    grid-template-columns: 1fr auto;
    grid-gap: 20px;

    @media (max-width: 767px) {
        grid-template-columns: 1fr;
    }
`;

export const Input = styled.input`
    padding: 10px;
    border: 1px solid #ddd;
`;

export const Button = styled.button`
    padding: 10px;
    background-color: ${({ theme }) => theme.color.teal};
    color: white;
    border: none;
    transition: 0.5s;
    cursor: pointer;

    &:hover {
        filter: brightness(130%);
        transform: scale(1.1);
    }

    &:active {
        filter: brightness(150%);
    }
`;