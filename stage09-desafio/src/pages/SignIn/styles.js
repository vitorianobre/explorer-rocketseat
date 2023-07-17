import styled from "styled-components";

import bg_image from "../../assets/image_background.png";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    
    display: flex;
    justify-items: center;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_BODY};
`;

export const Form = styled.form`
    margin: 0 134px;
    height: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;

    > h1 {
        font-size: 48px;
        font-weight: 700;
        line-height: 63px;
        color: ${({theme}) => theme.COLORS.PINK};
    }

    > p {
        font-size: 14px;
        line-height: 18px;
        text-align: left;
        margin-bottom: 48px;
    }

    > h2 {
        font-size: 24px;
        font-weight: 500;
        line-height: 32px;

        margin-bottom: 48px;
    }

    > a {
        margin-top: 42px;
        text-align: center;
        color: ${({theme}) => theme.COLORS.PINK};
    }
`;

export const Background = styled.div`
    flex: 1;
    background: linear-gradient(rgba(28, 27, 30, 70%), rgba(28, 27, 30, 70%)), url(${bg_image}) no-repeat center center;
    background-size: cover;
`;