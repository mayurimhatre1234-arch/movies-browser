import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./rootSaga";
import pageStateReducer from "../features/pageStateSlice";
import moviesReducer from "../features/movies/moviesSlice";
import peopleReducer from "../features/people/peopleSlice";
import movieDetailsReducer from "../features/movieDetails/movieDetailsSlice";
import personDetailsReducer from "../features/personDetails/peopleDetailSlice";
import themeReducer from "../features/themeSlice";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    pageState: pageStateReducer,
    movies: moviesReducer,
    people: peopleReducer,
    movieDetails: movieDetailsReducer,
    personDetails: personDetailsReducer,
    theme: themeReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export default store;
