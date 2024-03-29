import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-content: center;

    background-color: ${({ theme, isNew }) => isNew ? "transparent" : theme.COLORS.BACKGROUND_INPUT};
    color: ${({ theme}) => theme.COLORS.GRAY_300};

    border: ${({ theme, isNew }) => isNew ? `1px dashed ${theme.COLORS.GRAY_300}` : "none"};

    border-radius: 10px;
    padding-right: 16px;

    > button {
        border: none;
        background: none;
    }

    .button-delete, .button-add {
        color: ${({ theme}) => theme.COLORS.PINK};
    }

    > input {
        height: 56px;
        width: auto;

        padding: 16px;

        color: ${({ theme}) => theme.COLORS.WHITE};
        background: transparent;

        border: none;

        &::placeholder {
            color: ${({ theme}) => theme.COLORS.GRAY_300};
        }
    }
`;