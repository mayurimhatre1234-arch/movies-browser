import styled from "styled-components";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

export const Container = styled.div`
  margin-bottom: 24px;
  padding: 0 24px;
  width: 1416px;

  @media (max-width: 1416px) {
    width: 100%;
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.medium}) {
    padding: 0 16px;
    margin-bottom: 16px;
  }
`;

export const Heading = styled.h3`
  margin: 0 0 12px 0;
  font-size: 14px;
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  color: ${({ theme }) => theme.color.blackSpecial};

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    font-size: 12px;
  }
`;

export const ScrollRow = styled.div`
  display: flex;
  overflow-x: auto;
  gap: 12px;
  padding-bottom: 8px;

  &::-webkit-scrollbar {
    height: 6px;
  }

  &::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.color.grey};
    border-radius: 3px;
  }

  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.color.darkerGrey};
    border-radius: 3px;
  }
`;

export const Card = styled.div`
  flex: 0 0 100px;

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    flex: 0 0 80px;
  }
`;

export const CardLink = styled(NavLink)`
  text-decoration: none;
  color: inherit;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
`;

export const CardImage = styled.img`
  width: 100%;
  aspect-ratio: 2 / 3;
  border-radius: 4px;
  object-fit: cover;
  background-color: ${({ theme }) => theme.color.imageBG};
`;

export const CardTitle = styled.span`
  font-size: 11px;
  line-height: 1.3;
  text-align: center;
  color: ${({ theme }) => theme.color.blackSpecial};
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  width: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    font-size: 10px;
  }
`;
