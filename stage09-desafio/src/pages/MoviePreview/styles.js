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

    .title {
        display: flex;
        gap: 19px;
        align-items: center;
        margin-bottom: 24px;
    }

    .info {
        display: flex;
        align-items: center;
        gap: 8px;
        margin-bottom: 41px;

        img {
            width: 16px;
            height: 16px;
            border-radius: 50%;
        }

        svg {
            color: ${({theme}) => theme.COLORS.PINK};
        }
    }

    .tags {
        display: flex;
        gap: 8px;
        margin-bottom: 40px;
    }
`;