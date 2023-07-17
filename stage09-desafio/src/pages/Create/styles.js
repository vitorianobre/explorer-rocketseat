import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-areas: "header"
    "content";
`;

export const Content = styled.div`
    margin: 40px 123px 35px;

    padding-right: 16px;

    > a {
        display: flex;
        align-items: center;
        gap: 8px;
        color: ${({theme}) => theme.COLORS.PINK};

        margin: 0 123px 24px 0;
    }

    > h2 {
        font-size: 36px;
        font-weight: 500;
        margin-bottom: 40px;
    }

    input[type=number]::-webkit-inner-spin-button { 
        -webkit-appearance: none;
    }
    input[type=number] { 
        -moz-appearance: textfield;
        appearance: textfield;
    }

    > div {
        display: flex;
        gap: 40px;
        margin-bottom: 40px;
    }

    .buttons {
        margin-top: 40px;
        display: flex;
        gap: 40px;
    }

    grid-area: content;
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

export const Section = styled.div`
    margin-top: 24px;
    padding: 16px;
    display: flex;
    flex-wrap: wrap;
    gap: 24px;
    width: 100%;
    background-color: ${({theme}) => theme.COLORS.BACKGROUND_800};
    border-radius: 8px;
`;