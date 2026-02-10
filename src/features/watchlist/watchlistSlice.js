import { createSlice } from "@reduxjs/toolkit";

const getInitialState = () => {
  try {
    const saved = localStorage.getItem("watchlist");
    if (saved) {
      return JSON.parse(saved);
    }
  } catch {}
  return { movieIds: [], movieData: {} };
};

const saveToLocalStorage = (state) => {
  try {
    localStorage.setItem(
      "watchlist",
      JSON.stringify({ movieIds: state.movieIds, movieData: state.movieData })
    );
  } catch {}
};

const watchlistSlice = createSlice({
  name: "watchlist",
  initialState: getInitialState(),
  reducers: {
    toggleWatchlist: (state, { payload: movie }) => {
      const id = movie.id;
      const index = state.movieIds.indexOf(id);
      if (index === -1) {
        state.movieIds.push(id);
        state.movieData[id] = movie;
      } else {
        state.movieIds.splice(index, 1);
        delete state.movieData[id];
      }
      saveToLocalStorage(state);
    },
  },
});

export const { toggleWatchlist } = watchlistSlice.actions;

const selectWatchlistState = (state) => state.watchlist;
export const selectWatchlistIds = (state) =>
  selectWatchlistState(state).movieIds;
export const selectWatchlistMovies = (state) => {
  const { movieIds, movieData } = selectWatchlistState(state);
  return movieIds.map((id) => movieData[id]).filter(Boolean);
};
export const selectIsInWatchlist = (id) => (state) =>
  selectWatchlistIds(state).includes(id);
export const selectWatchlistCount = (state) =>
  selectWatchlistIds(state).length;

export default watchlistSlice.reducer;
