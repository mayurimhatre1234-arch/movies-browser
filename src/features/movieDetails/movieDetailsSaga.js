import { all, call, delay, put, takeLatest } from "redux-saga/effects";
import {
  getCredits,
  getMovieDetails,
  getSimilarMovies,
} from "../../api/fetchApi";
import {
  fetchApi,
  fetchError,
  readyStatus,
  resetShowContent,
} from "../pageStateSlice";
import {
  setCredits,
  setMovieDetails,
  setSimilarMovies,
} from "./movieDetailsSlice";

function* fetchApiHandler({ payload: { pathName, id } }) {
  if (pathName !== `/movies/details/${id}`) return;

  try {
    yield delay(500);
    yield put(resetShowContent());
    const movieDetails = yield call(getMovieDetails, id);
    if (!movieDetails) {
      throw new Error("Movie details not found");
    }
    const [credits, similar] = yield all([
      call(getCredits, id),
      call(getSimilarMovies, id),
    ]);
    yield put(setMovieDetails(movieDetails));
    yield put(setCredits(credits));
    yield put(setSimilarMovies(similar?.results?.slice(0, 10) || []));
    yield put(readyStatus());
  } catch (error) {
    yield put(fetchError());
  }
}

export function* movieDetailsSaga() {
  yield takeLatest(fetchApi.type, fetchApiHandler);
}
