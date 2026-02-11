import styled from "styled-components";

export const EmptyMessage = styled.div`
  text-align: center;
  padding: 60px 24px;
  color: ${({ theme }) => theme.color.darkerGrey};
  font-size: 18px;
  line-height: 1.6;

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    padding: 40px 16px;
    font-size: 14px;
  }
`;
