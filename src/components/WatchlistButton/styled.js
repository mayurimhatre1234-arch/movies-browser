import styled from "styled-components";

export const HeartButton = styled.button`
  background-color: ${({ theme }) => theme.color.white}CC;
  border: none;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  font-size: 18px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s, background-color 0.2s;
  z-index: 1;
  line-height: 1;

  ${({ $absolute }) =>
    $absolute &&
    `
    position: absolute;
    top: 8px;
    right: 8px;
  `}

  &:hover {
    transform: scale(1.15);
    background-color: ${({ theme }) => theme.color.white};
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    width: 30px;
    height: 30px;
    font-size: 14px;
  }
`;
