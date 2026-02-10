import { Section } from "../../../components/Section";
import { MoviesWrapper } from "../../../components/MoviesWrapper";
import { useDispatch, useSelector } from "react-redux";
import { MovieTile } from "../../../components/MovieTile";
import { selectGenres, selectMovies, selectSelectedGenres } from "../moviesSlice";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import { useEffect } from "react";
import { Pagination } from "../../../components/Pagination";
import {
  searchQueryParamName,
  searchPageParamName,
} from "../../../utils/searchParamNames";

import {
  fetchApi,
  selectQuery,
  selectShowContent,
  selectTotalResults,
  setShowContent,
} from "../../pageStateSlice";
import { useQueryParameter } from "../../../utils/queryParameters";
import { Page } from "../../../components/Page";
import { GenreFilter, NoFilteredResults } from "../../../components/GenreFilter";

export const MoviesPage = () => {
  const location = useLocation();
  const movies = useSelector(selectMovies);
  const genres = useSelector(selectGenres);
  const storeQuery = useSelector(selectQuery);
  const selectedGenres = useSelector(selectSelectedGenres);
  const dispatch = useDispatch();
  const query = useQueryParameter(searchQueryParamName);
  const page = useQueryParameter(searchPageParamName);
  const fullPathName = location.pathname;
  const totalResults = useSelector(selectTotalResults);
  const showContent = useSelector(selectShowContent);

  useEffect(() => {
    dispatch(fetchApi({ pathName: fullPathName, page: page || 1, query }));
    // eslint-disable-next-line
  }, [query, page]);

  const onLoadHandler = () => {
    !showContent && dispatch(setShowContent());
  };

  const getTitle = () => {
    if (storeQuery) {
      return `Search results for "${storeQuery}" ${
        totalResults ? "(" + totalResults + ")" : ""
      }`;
    }
    if (selectedGenres.length > 0) {
      const genreNames = selectedGenres
        .map((id) => genres[id])
        .filter(Boolean)
        .join(", ");
      return `Popular movies - ${genreNames}`;
    }
    return "Popular movies";
  };

  return (
    <Page
      children={
        <>
          {!storeQuery && <GenreFilter show={showContent} />}
          <Section
            show={storeQuery ? true : showContent}
            title={getTitle()}
          >
            {movies?.length > 0 ? (
              <MoviesWrapper onLoad={onLoadHandler} $show={showContent}>
                {movies.map((movie) => (
                  <MovieTile
                    key={movie.id}
                    poster={movie.poster_path}
                    title={movie.title}
                    subtitle={movie.release_date.split("-")[0]}
                    tags={movie.genre_ids}
                    genres={genres}
                    rating={movie.vote_average}
                    votes={movie.vote_count}
                    id={movie.id}
                  />
                ))}
              </MoviesWrapper>
            ) : (
              selectedGenres.length > 0 && (
                <NoFilteredResults>
                  No movies found matching the selected genres.
                  <br />
                  Try selecting different genres or clear the filters.
                </NoFilteredResults>
              )
            )}
          </Section>
          <Pagination />
        </>
      }
    />
  );
};
