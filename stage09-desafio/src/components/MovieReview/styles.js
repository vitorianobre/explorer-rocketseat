import styled from "styled-components";

export const Container = styled.div`
    /* display: flex;
    flex-direction: column;
    align-items: flex-start; */
    padding: 32px;

    background-color: ${({theme}) => theme.COLORS.BACKGROUND_900};
    border-radius: 16px;

    > h1 {
        font-size: 24px;
        font-weight: 700;
        margin-bottom: 8px;
    }

    > p {
        overflow: hidden; // Removendo barra de rolagem
        -webkit-line-clamp: 2; // Qtd de linhas
        text-overflow: ellipsis; // Adicionando "..." ao final
        display: -webkit-box;
        -webkit-box-orient: vertical;
        margin-top: 15px;
        color: ${({theme}) => theme.COLORS.GRAY_400};
    }

    > footer {
        width: 100%;
        display: flex;
        margin-top: 15px;
    }
`;
