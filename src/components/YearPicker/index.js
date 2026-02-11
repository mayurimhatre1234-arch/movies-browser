import { useState, useRef, useEffect, useCallback } from "react";
import {
  PickerWrapper,
  PickerInput,
  CalendarIcon,
  Dropdown,
  DropdownHeader,
  DecadeLabel,
  NavButton,
  YearGrid,
  YearCell,
  ClearRow,
  ClearButton,
} from "./styled";

const MIN_YEAR = 1900;
const MAX_YEAR = 2030;
const YEARS_PER_PAGE = 12;

const getDecadeStart = (year) =>
  Math.floor(year / YEARS_PER_PAGE) * YEARS_PER_PAGE;

export const YearPicker = ({ value, onChange, placeholder }) => {
  const [open, setOpen] = useState(false);
  const currentYear = new Date().getFullYear();
  const selectedYear = value ? parseInt(value, 10) : null;
  const [decadeStart, setDecadeStart] = useState(
    selectedYear ? getDecadeStart(selectedYear) : getDecadeStart(currentYear)
  );
  const wrapperRef = useRef(null);

  const handleClickOutside = useCallback((e) => {
    if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
      setOpen(false);
    }
  }, []);

  useEffect(() => {
    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open, handleClickOutside]);

  const toggleOpen = () => {
    if (!open && selectedYear) {
      setDecadeStart(getDecadeStart(selectedYear));
    }
    setOpen((prev) => !prev);
  };

  const handleSelectYear = (year) => {
    onChange(String(year));
    setOpen(false);
  };

  const handleClear = () => {
    onChange("");
    setOpen(false);
  };

  const years = Array.from(
    { length: YEARS_PER_PAGE },
    (_, i) => decadeStart + i
  );

  const canGoPrev = decadeStart > MIN_YEAR;
  const canGoNext = decadeStart + YEARS_PER_PAGE <= MAX_YEAR;

  return (
    <PickerWrapper ref={wrapperRef}>
      <PickerInput
        type="button"
        onClick={toggleOpen}
        $hasValue={!!selectedYear}
      >
        {selectedYear || placeholder || "Select year"}
        <CalendarIcon>&#128197;</CalendarIcon>
      </PickerInput>
      {open && (
        <Dropdown>
          <DropdownHeader>
            <NavButton
              onClick={() => setDecadeStart((d) => d - YEARS_PER_PAGE)}
              disabled={!canGoPrev}
            >
              &#8249;
            </NavButton>
            <DecadeLabel>
              {years[0]} &ndash; {years[years.length - 1]}
            </DecadeLabel>
            <NavButton
              onClick={() => setDecadeStart((d) => d + YEARS_PER_PAGE)}
              disabled={!canGoNext}
            >
              &#8250;
            </NavButton>
          </DropdownHeader>
          <YearGrid>
            {years.map((year) => (
              <YearCell
                key={year}
                $selected={year === selectedYear}
                disabled={year < MIN_YEAR || year > MAX_YEAR}
                onClick={() => handleSelectYear(year)}
              >
                {year}
              </YearCell>
            ))}
          </YearGrid>
          {selectedYear && (
            <ClearRow>
              <ClearButton onClick={handleClear}>Clear</ClearButton>
            </ClearRow>
          )}
        </Dropdown>
      )}
    </PickerWrapper>
  );
};
