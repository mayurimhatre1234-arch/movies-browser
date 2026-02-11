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
} from "./styled";

const SORT_OPTIONS = [
  { value: "", label: "Popular (default)" },
  { value: "vote_average.desc", label: "Rating (high to low)" },
  { value: "vote_average.asc", label: "Rating (low to high)" },
  { value: "primary_release_date.desc", label: "Release date (newest)" },
  { value: "primary_release_date.asc", label: "Release date (oldest)" },
  { value: "revenue.desc", label: "Revenue (highest)" },
];

export const AdvancedFilters = ({ show }) => {
  const replaceQueryParameters = useReplaceQueryParameters();
  const sortBy = useQueryParameter(sortByParamName) || "";
  const minRating = useQueryParameter(minRatingParamName) || "";
  const yearFrom = useQueryParameter(yearFromParamName) || "";
  const yearTo = useQueryParameter(yearToParamName) || "";

  const hasFilters = sortBy || minRating || yearFrom || yearTo;

  const handleChange = (param, value) => {
    replaceQueryParameters({ [param]: value, page: "" });
  };

  const handleReset = () => {
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
        <FilterLabel>Advanced Filters</FilterLabel>
        <ResetButton onClick={handleReset} disabled={!hasFilters}>
          Reset filters
        </ResetButton>
      </FilterHeader>
      <FilterRow>
        <FilterGroup>
          <FilterGroupLabel>Sort by</FilterGroupLabel>
          <FilterSelect
            value={sortBy}
            onChange={(e) => handleChange(sortByParamName, e.target.value)}
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
            value={minRating}
            onChange={(e) => handleChange(minRatingParamName, e.target.value)}
          />
        </FilterGroup>
        <FilterGroup>
          <FilterGroupLabel>Year from</FilterGroupLabel>
          <FilterInput
            type="number"
            min="1900"
            max="2030"
            placeholder="1900"
            value={yearFrom}
            onChange={(e) => handleChange(yearFromParamName, e.target.value)}
          />
        </FilterGroup>
        <FilterGroup>
          <FilterGroupLabel>Year to</FilterGroupLabel>
          <FilterInput
            type="number"
            min="1900"
            max="2030"
            placeholder="2026"
            value={yearTo}
            onChange={(e) => handleChange(yearToParamName, e.target.value)}
          />
        </FilterGroup>
      </FilterRow>
    </FilterContainer>
  );
};
