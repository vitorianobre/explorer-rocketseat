import styled from "styled-components";

export const Container = styled.textarea`
    width: 100%;
    height: 274px;

    padding: 19px 16px;
    border-radius: 10px;
    border: none;
    resize: none;
    background: ${({theme}) => theme.COLORS.BACKGROUND_INPUT};
    margin-bottom: 40px;

    &::placeholder {
        color: ${({theme}) => theme.COLORS.GRAY_100};
    }
`;