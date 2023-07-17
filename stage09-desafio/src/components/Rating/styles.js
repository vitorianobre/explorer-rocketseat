import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: ${({ isBigSize }) => (isBigSize ? "center" : "start")};
    gap: 1rem;
    svg {
        font-size: ${({ isBigSize }) => (isBigSize ? "36px" : "16px")};
        color: ${({ theme }) => theme.COLORS.PINK};
    }
`;