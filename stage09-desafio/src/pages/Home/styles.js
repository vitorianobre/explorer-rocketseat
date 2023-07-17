import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-areas: "header"
    "section"
    "reviews";
`;

export const Section = styled.div`
    grid-area: section;
    padding: 50px 106px 37px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    h2 {
        font-size: 32px;
        font-weight: 400;
    }

    button {
        width: 207px;
        height: 48px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
    }
`;

export const Content = styled.div`
    grid-area: reviews;
    padding: 0 106px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 24px;

    margin: 17px 0 40px;

    overflow-y: auto;
    ::-webkit-scrollbar {
        width: 8px;
    }

    ::-webkit-scrollbar-track {
        background: transparent;
    }

    ::-webkit-scrollbar-thumb {
        background-color: ${({theme}) => theme.COLORS.PINK};
        border-radius: 8px;
        border: none;
    }
`;