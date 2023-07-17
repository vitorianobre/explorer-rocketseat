import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
    padding: 30px 123px;
    width: 100%;
    height: 116px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 64px;
    
    border-bottom: 1px solid #3E3B47;

    > h1 {
        font-size: 24px;
        font-weight: 700;
        color: ${({theme}) => theme.COLORS.PINK};
    }
`;

export const Profile = styled.div`
    display: grid;
    align-items: center;
    justify-content: center;
    grid-template-areas: "nome img"
    "sair img";
    grid-template-columns: 125px auto;
    grid-template-rows: 18px 18px;

    .perfil {
        grid-area: nome;
        font-size: 14px;
        font-weight: 700;
        text-align: right;
        color: ${({theme}) => theme.COLORS.WHITE};
    }

    .sair {
        grid-area: sair;
        font-size: 14px;
        font-weight: 400;
        text-align: right;
        color: ${({theme}) => theme.COLORS.GRAY_100};
    }

    > a img {
        grid-area: img;
        width: 64px;
        height: 64px;
        border-radius: 50%;
        margin-left: 9px;
    }
`;