import { useState, useEffect, useRef, useCallback } from "react";
import { useQueryParameter, useReplaceQueryParameters } from "../../utils/queryParameters";
import {
  sortByParamName,
  minRatingParamName,
  yearFromParamName,
  yearToParamName,
} from "../../utils/searchParamNames";
import {
  FilterContainer,
  FilterHeader,
  FilterLabel,
  FilterRow,
  FilterGroup,
  FilterGroupLabel,
  FilterSelect,
  FilterInput,
  ResetButton,
  ToggleButton,
  ChevronIcon,
  ActiveBadge,
  CollapsibleContent,
} from "./styled";
import { YearPicker } from "../YearPicker";

const SORT_OPTIONS = [
  { value: "", label: "Popular (default)" },
  { value: "vote_average.desc", label: "Rating (high to low)" },
  { value: "vote_average.asc", label: "Rating (low to high)" },
  { value: "primary_release_date.desc", label: "Release date (newest)" },
  { value: "primary_release_date.asc", label: "Release date (oldest)" },
  { value: "revenue.desc", label: "Revenue (highest)" },
];

const DEBOUNCE_DELAY = 800;

export const AdvancedFilters = ({ show }) => {
  const replaceQueryParameters = useReplaceQueryParameters();
  const sortBy = useQueryParameter(sortByParamName) || "";
  const minRating = useQueryParameter(minRatingParamName) || "";
  const yearFrom = useQueryParameter(yearFromParamName) || "";
  const yearTo = useQueryParameter(yearToParamName) || "";

  const [localMinRating, setLocalMinRating] = useState(minRating);

  const debounceTimerRef = useRef(null);

  useEffect(() => { setLocalMinRating(minRating); }, [minRating]);

  const debouncedUpdate = useCallback((param, value) => {
    if (debounceTimerRef.current) {
      clearTimeout(debounceTimerRef.current);
    }
    debounceTimerRef.current = setTimeout(() => {
      replaceQueryParameters({ [param]: value, page: "" });
    }, DEBOUNCE_DELAY);
  }, [replaceQueryParameters]);

  useEffect(() => {
    return () => {
      if (debounceTimerRef.current) {
        clearTimeout(debounceTimerRef.current);
      }
    };
  }, []);

  const [isExpanded, setIsExpanded] = useState(false);

  const hasFilters = sortBy || minRating || yearFrom || yearTo;

  const handleSortChange = (value) => {
    replaceQueryParameters({ [sortByParamName]: value, page: "" });
  };

  const handleYearChange = (param, value) => {
    replaceQueryParameters({ [param]: value, page: "" });
  };

  const handleReset = () => {
    if (debounceTimerRef.current) {
      clearTimeout(debounceTimerRef.current);
    }
    setLocalMinRating("");
    replaceQueryParameters({
      [sortByParamName]: "",
      [minRatingParamName]: "",
      [yearFromParamName]: "",
      [yearToParamName]: "",
      page: "",
    });
  };

  return (
    <FilterContainer style={{ opacity: show ? 1 : 0, transition: "opacity 0.6s" }}>
      <FilterHeader>
        <ToggleButton onClick={() => setIsExpanded(prev => !prev)}>
          <FilterLabel>Advanced Filters</FilterLabel>
          <ChevronIcon $isExpanded={isExpanded} />
          {!isExpanded && hasFilters && <ActiveBadge />}
        </ToggleButton>
        <ResetButton onClick={handleReset} disabled={!hasFilters}>
          Reset filters
        </ResetButton>
      </FilterHeader>
      <CollapsibleContent $isExpanded={isExpanded}>
      <FilterRow>
        <FilterGroup>
          <FilterGroupLabel>Sort by</FilterGroupLabel>
          <FilterSelect
            value={sortBy}
            onChange={(e) => handleSortChange(e.target.value)}
          >
            {SORT_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </FilterSelect>
        </FilterGroup>
        <FilterGroup>
          <FilterGroupLabel>Min rating</FilterGroupLabel>
          <FilterInput
            type="number"
            min="0"
            max="10"
            step="0.5"
            placeholder="0"
            value={localMinRating}
            onChange={(e) => {
              setLocalMinRating(e.target.value);
              debouncedUpdate(minRatingParamName, e.target.value);
            }}
          />
        </FilterGroup>
        <FilterGroup>
          <FilterGroupLabel>Year from</FilterGroupLabel>
          <YearPicker
            value={yearFrom}
            placeholder="Select year"
            onChange={(value) => handleYearChange(yearFromParamName, value)}
          />
        </FilterGroup>
        <FilterGroup>
          <FilterGroupLabel>Year to</FilterGroupLabel>
          <YearPicker
            value={yearTo}
            placeholder="Select year"
            onChange={(value) => handleYearChange(yearToParamName, value)}
          />
        </FilterGroup>
      </FilterRow>
      </CollapsibleContent>
    </FilterContainer>
  );
};
