import styled from "styled-components";

export const Container = styled.button`
    width: 100%;
    height: 56px;

    margin-top: 16px;

    padding: 16px 0;

    font-weight: 500;

    border-radius: 10px;
    border: 0;

    &:disabled {
        opacity: 0.5;
    }

    &.button-delete {
        background: ${({theme}) => theme.COLORS.BACKGROUND_800};
        color: ${({theme}) => theme.COLORS.PINK};
    }

    &.button-save {
        background: ${({theme}) => theme.COLORS.PINK};
        color: ${({theme}) => theme.COLORS.GRAY_300};
    }
`;