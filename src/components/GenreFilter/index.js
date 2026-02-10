import { useDispatch, useSelector } from "react-redux";
import {
  selectGenres,
  selectSelectedGenres,
  toggleGenre,
  clearGenreFilters,
} from "../../features/movies/moviesSlice";
import {
  FilterContainer,
  FilterHeader,
  FilterLabel,
  ClearButton,
  GenreList,
  GenreButton,
  SelectedCount,
  NoFilteredResults,
} from "./styled";

export { NoFilteredResults };

export const GenreFilter = ({ show }) => {
  const dispatch = useDispatch();
  const genres = useSelector(selectGenres);
  const selectedGenres = useSelector(selectSelectedGenres);

  if (!genres) {
    return null;
  }

  const genreEntries = Object.entries(genres).map(([id, name]) => ({
    id: parseInt(id, 10),
    name,
  }));

  const handleToggleGenre = (genreId) => {
    dispatch(toggleGenre(genreId));
  };

  const handleClearFilters = () => {
    dispatch(clearGenreFilters());
  };

  const isSelected = (genreId) => selectedGenres.includes(genreId);

  return (
    <FilterContainer style={{ opacity: show ? 1 : 0, transition: "opacity 0.6s" }}>
      <FilterHeader>
        <div>
          <FilterLabel>Filter by genre</FilterLabel>
          {selectedGenres.length > 0 && (
            <SelectedCount>({selectedGenres.length} selected)</SelectedCount>
          )}
        </div>
        <ClearButton
          onClick={handleClearFilters}
          disabled={selectedGenres.length === 0}
        >
          Clear filters
        </ClearButton>
      </FilterHeader>
      <GenreList>
        {genreEntries.map(({ id, name }) => (
          <GenreButton
            key={id}
            $selected={isSelected(id)}
            onClick={() => handleToggleGenre(id)}
            type="button"
          >
            {name}
          </GenreButton>
        ))}
      </GenreList>
    </FilterContainer>
  );
};
