import styled from "styled-components";

export const ScrollContainer = styled.div`
  display: flex;
  overflow-x: auto;
  gap: 16px;
  padding-bottom: 12px;

  &::-webkit-scrollbar {
    height: 8px;
  }

  &::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.color.grey};
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.color.darkerGrey};
    border-radius: 4px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.color.stormGray};
  }
`;

export const ScrollItem = styled.div`
  flex: 0 0 180px;

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    flex: 0 0 140px;
  }
`;
