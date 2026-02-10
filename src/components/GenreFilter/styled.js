import styled from "styled-components";

export const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
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

export const FilterHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 12px;
`;

export const FilterLabel = styled.span`
  font-size: 14px;
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  color: ${({ theme }) => theme.color.blackSpecial};

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    font-size: 12px;
  }
`;

export const ClearButton = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.color.blue};
  font-size: 14px;
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  cursor: pointer;
  padding: 4px 8px;
  border-radius: 4px;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.color.lightBlue};
  }

  &:disabled {
    color: ${({ theme }) => theme.color.darkerGrey};
    cursor: not-allowed;

    &:hover {
      background-color: transparent;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    font-size: 12px;
  }
`;

export const GenreList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export const GenreButton = styled.button`
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 14px;
  line-height: 1.4;
  border: 1px solid ${({ theme, $selected }) =>
    $selected ? theme.color.blue : theme.color.grey};
  background-color: ${({ theme, $selected }) =>
    $selected ? theme.color.blue : theme.color.white};
  color: ${({ theme, $selected }) =>
    $selected ? theme.color.white : theme.color.blackSpecial};
  cursor: pointer;
  transition: all 0.2s;
  font-weight: ${({ theme }) => theme.fontWeight.regular};

  &:hover {
    border-color: ${({ theme }) => theme.color.blue};
    background-color: ${({ theme, $selected }) =>
      $selected ? theme.color.blue : theme.color.lightBlue};
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    padding: 6px 12px;
    font-size: 12px;
  }
`;

export const SelectedCount = styled.span`
  font-size: 12px;
  color: ${({ theme }) => theme.color.darkerGrey};
  margin-left: 8px;

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    font-size: 10px;
  }
`;

export const NoFilteredResults = styled.div`
  text-align: center;
  padding: 40px 24px;
  color: ${({ theme }) => theme.color.darkerGrey};
  font-size: 18px;
  line-height: 1.5;

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    padding: 24px 16px;
    font-size: 14px;
  }
`;
