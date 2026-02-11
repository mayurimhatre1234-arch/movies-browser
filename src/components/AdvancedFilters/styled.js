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

export const FilterRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  align-items: flex-end;

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    gap: 10px;
  }
`;

export const FilterGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const FilterGroupLabel = styled.label`
  font-size: 12px;
  color: ${({ theme }) => theme.color.darkerGrey};
  font-weight: ${({ theme }) => theme.fontWeight.medium};

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    font-size: 10px;
  }
`;

export const FilterSelect = styled.select`
  padding: 8px 12px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.color.grey};
  background-color: ${({ theme }) => theme.color.white};
  color: ${({ theme }) => theme.color.blackSpecial};
  font-size: 14px;
  font-family: inherit;
  cursor: pointer;
  transition: border-color 0.2s;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.color.blue};
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    padding: 6px 10px;
    font-size: 12px;
  }
`;

export const FilterInput = styled.input`
  padding: 8px 12px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.color.grey};
  background-color: ${({ theme }) => theme.color.white};
  color: ${({ theme }) => theme.color.blackSpecial};
  font-size: 14px;
  font-family: inherit;
  width: 100px;
  transition: border-color 0.2s;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.color.blue};
  }

  &::placeholder {
    color: ${({ theme }) => theme.color.darkerGrey};
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    padding: 6px 10px;
    font-size: 12px;
    width: 80px;
  }
`;

export const ResetButton = styled.button`
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
