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

export const ToggleButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  background: none;
  border: none;
  padding: 4px 0;
  cursor: pointer;
  color: inherit;
  font: inherit;
`;

export const ChevronIcon = styled.span`
  display: inline-block;
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 6px solid ${({ theme }) => theme.color.blackSpecial};
  transition: transform 0.3s ease;
  transform: ${({ $isExpanded }) => $isExpanded ? "rotate(0deg)" : "rotate(-90deg)"};
`;

export const ActiveBadge = styled.span`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.color.blue};
  display: inline-block;
  flex-shrink: 0;
`;

export const CollapsibleContent = styled.div`
  max-height: ${({ $isExpanded }) => $isExpanded ? "200px" : "0"};
  overflow: hidden;
  transition: max-height 0.3s ease;
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
