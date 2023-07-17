import styled from "styled-components";

export const Container = styled.div`
    font-size: 12px;
    padding: 5px 16px;
    border-radius: 8px;
    margin-right: 8px;
    color: ${({ theme }) => theme.COLORS.GRAY_200};
    background-color: ${({ theme }) => theme.COLORS.GRAY_300};
`;