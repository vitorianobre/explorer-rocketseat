import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;

    background: ${({theme}) => theme.COLORS.BACKGROUND_INPUT};
    color: ${({theme}) => theme.COLORS.GRAY_100};

    border-radius: 10px;

    margin-bottom: 8px;

    > input {
        width: 100%;
        height: 56px;
        margin-left: 16px;

        padding: 17px;

        color: ${({theme}) => theme.COLORS.WHITE};
        background: none;
        border: 0;

        &::placeholder {
            color: ${({theme}) => theme.COLORS.GRAY_100};
        }
    }

    > svg {
        margin-left: 16px;
    }
`;