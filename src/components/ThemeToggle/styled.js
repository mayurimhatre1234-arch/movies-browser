import styled from "styled-components";

export const ToggleButton = styled.button`
  background-color: transparent;
  border: 1px solid transparent;
  border-radius: 24px;
  padding: 6px 12px;
  font-size: 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: border-color 0.3s;
  line-height: 1;

  &:hover {
    border-color: ${({ theme }) => theme.color.navText};
  }

  @media (max-width: 1080px) {
    font-size: 16px;
    padding: 6px 10px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    font-size: 14px;
    padding: 4px 8px;
  }
`;
