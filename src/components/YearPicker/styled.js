import styled from "styled-components";

export const PickerWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

export const PickerInput = styled.button`
  padding: 8px 12px;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.color.grey};
  background-color: ${({ theme }) => theme.color.white};
  color: ${({ theme, $hasValue }) =>
    $hasValue ? theme.color.blackSpecial : theme.color.darkerGrey};
  font-size: 14px;
  font-family: inherit;
  width: 124px;
  text-align: left;
  cursor: pointer;
  transition: border-color 0.2s;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.color.blue};
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    padding: 6px 10px;
    font-size: 12px;
    width: 104px;
  }
`;

export const CalendarIcon = styled.span`
  font-size: 16px;
  line-height: 1;
  opacity: 0.6;

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    font-size: 14px;
  }
`;

export const Dropdown = styled.div`
  position: absolute;
  top: calc(100% + 4px);
  left: 0;
  z-index: 100;
  background-color: ${({ theme }) => theme.color.white};
  border: 1px solid ${({ theme }) => theme.color.grey};
  border-radius: 12px;
  box-shadow: 0 4px 16px ${({ theme }) => theme.color.boxShadow};
  padding: 12px;
  width: 240px;
`;

export const DropdownHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 8px;
`;

export const DecadeLabel = styled.span`
  font-size: 14px;
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  color: ${({ theme }) => theme.color.blackSpecial};
`;

export const NavButton = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.color.blue};
  font-size: 18px;
  cursor: pointer;
  padding: 4px 8px;
  border-radius: 4px;
  line-height: 1;
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
`;

export const YearGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 4px;
`;

export const YearCell = styled.button`
  padding: 8px 4px;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-family: inherit;
  cursor: pointer;
  transition: all 0.15s;
  background-color: ${({ theme, $selected }) =>
    $selected ? theme.color.blue : "transparent"};
  color: ${({ theme, $selected }) =>
    $selected ? theme.color.navText : theme.color.blackSpecial};
  font-weight: ${({ theme, $selected }) =>
    $selected ? theme.fontWeight.semiBold : theme.fontWeight.regular};

  &:hover {
    background-color: ${({ theme, $selected }) =>
      $selected ? theme.color.blue : theme.color.lightBlue};
  }

  &:disabled {
    color: ${({ theme }) => theme.color.darkerGrey};
    cursor: not-allowed;
    opacity: 0.4;
    &:hover {
      background-color: transparent;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoint.small}) {
    font-size: 12px;
    padding: 6px 2px;
  }
`;

export const ClearRow = styled.div`
  margin-top: 8px;
  text-align: center;
`;

export const ClearButton = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.color.blue};
  font-size: 12px;
  font-weight: ${({ theme }) => theme.fontWeight.medium};
  cursor: pointer;
  padding: 4px 8px;
  border-radius: 4px;
  transition: background-color 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.color.lightBlue};
  }
`;
