import styled from "styled-components";


export const Segment = styled.section`
    margin: 10px;
    background-color: ${({ theme }) => theme.color.white};
`;

export const Header = styled.header`
    display: grid;
    grid-template-columns: auto auto;
    justify-content: space-between;
    grid-gap: 20px;
    align-items: center;
    padding: 20px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
        grid-template-columns: 1fr;
    }
`;

export const Title = styled.h2`
    margin: 0;
`;

export const Content = styled.div`
    padding: 20px;
    border-top: 1px solid ${({ theme }) => theme.color.alto};
`;