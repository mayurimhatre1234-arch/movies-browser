import {
  popularMoviesUrl,
  genreUrl,
  movieDetailsUrl,
  creditsUrl,
  popularPeopleUrl,
  personUrl,
  movieCreditsUrl,
  searchMovieUrl,
  searchPersonUrl,
  discoverMoviesUrl,
} from "./api";

const fetchApi = (url) =>
  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    })
    .catch((err) => {
      console.error(err);
    });

export const getMovies = (page) => {
  const updatedUrl = popularMoviesUrl.replace("{page}", page);
  return fetchApi(updatedUrl);
};

export const getMovieDetails = (id) => {
  const updatedUrl = movieDetailsUrl.replace("{movie_id}", id);
  return fetchApi(updatedUrl);
};

export const getGenres = () => fetchApi(genreUrl);

export const getCredits = (id) => {
  const updatedUrl = creditsUrl.replace("{movie_id}", id);
  return fetchApi(updatedUrl);
};

export const getPeople = (page) => {
  const updatedUrl = popularPeopleUrl.replace("{page}", page);
  return fetchApi(updatedUrl);
};

export const getPerson = (id) => {
  const updatedUrl = personUrl.replace("{person_id}", id);
  return fetchApi(updatedUrl);
};

export const getMovieCredits = (id) => {
  const updatedUrl = movieCreditsUrl.replace("{person_id}", id);
  return fetchApi(updatedUrl);
};

export const getSearchMovie = ({ page, query }) => {
  const updatedUrl = searchMovieUrl
    .replace("{query}", query)
    .replace("{page}", page);
  return fetchApi(updatedUrl);
};

export const getSearchPerson = ({ page, query }) => {
  const updatedUrl = searchPersonUrl
    .replace("{query}", query)
    .replace("{page}", page);
  return fetchApi(updatedUrl);
};

export const getDiscoverMovies = ({ page, sortBy, minRating, yearFrom, yearTo, genres }) => {
  let url = `${discoverMoviesUrl}&page=${page}`;
  if (sortBy) url += `&sort_by=${sortBy}`;
  if (minRating) url += `&vote_average.gte=${minRating}&vote_count.gte=50`;
  if (yearFrom) url += `&primary_release_date.gte=${yearFrom}-01-01`;
  if (yearTo) url += `&primary_release_date.lte=${yearTo}-12-31`;
  if (genres) url += `&with_genres=${genres}`;
  return fetchApi(url);
};
