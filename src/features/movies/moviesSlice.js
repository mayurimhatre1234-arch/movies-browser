import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    movies: [],
    genres: null,
    selectedGenres: [],
  },
  reducers: {
    setMovies: (state, { payload: movies }) => {
      state.movies = movies;
    },
    setGenres: (state, { payload: genres }) => {
      state.genres = genres.reduce(
        (acc, { id, name }) => ({
          ...acc,
          [id]: name,
        }),
        {}
      );
    },
    toggleGenre: (state, { payload: genreId }) => {
      const index = state.selectedGenres.indexOf(genreId);
      if (index === -1) {
        state.selectedGenres.push(genreId);
      } else {
        state.selectedGenres.splice(index, 1);
      }
    },
    clearGenreFilters: (state) => {
      state.selectedGenres = [];
    },
  },
});

export const { setMovies, setGenres, toggleGenre, clearGenreFilters } = moviesSlice.actions;

const selectMoviesState = (state) => state.movies;
export const selectAllMovies = (state) => selectMoviesState(state).movies;
export const selectGenres = (state) => selectMoviesState(state).genres;
export const selectSelectedGenres = (state) => selectMoviesState(state).selectedGenres;

export const selectMovies = (state) => {
  const movies = selectAllMovies(state);
  const selectedGenres = selectSelectedGenres(state);

  if (selectedGenres.length === 0) {
    return movies;
  }

  return movies.filter((movie) =>
    selectedGenres.some((genreId) => movie.genre_ids.includes(genreId))
  );
};

export default moviesSlice.reducer;
