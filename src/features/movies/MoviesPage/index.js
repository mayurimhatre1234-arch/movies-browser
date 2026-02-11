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
  sortByParamName,
  minRatingParamName,
  yearFromParamName,
  yearToParamName,
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
import { AdvancedFilters } from "../../../components/AdvancedFilters";

export const MoviesPage = () => {
  const location = useLocation();
  const movies = useSelector(selectMovies);
  const genres = useSelector(selectGenres);
  const storeQuery = useSelector(selectQuery);
  const selectedGenres = useSelector(selectSelectedGenres);
  const dispatch = useDispatch();
  const query = useQueryParameter(searchQueryParamName);
  const page = useQueryParameter(searchPageParamName);
  const sortBy = useQueryParameter(sortByParamName);
  const minRating = useQueryParameter(minRatingParamName);
  const yearFrom = useQueryParameter(yearFromParamName);
  const yearTo = useQueryParameter(yearToParamName);
  const fullPathName = location.pathname;
  const totalResults = useSelector(selectTotalResults);
  const showContent = useSelector(selectShowContent);

  const hasAdvancedFilters = sortBy || minRating || yearFrom || yearTo;

  useEffect(() => {
    dispatch(
      fetchApi({
        pathName: fullPathName,
        page: page || 1,
        query,
        sortBy,
        minRating,
        yearFrom,
        yearTo,
      })
    );
    // eslint-disable-next-line
  }, [query, page, sortBy, minRating, yearFrom, yearTo]);

  const onLoadHandler = () => {
    !showContent && dispatch(setShowContent());
  };

  const getTitle = () => {
    if (storeQuery) {
      return `Search results for "${storeQuery}" ${
        totalResults ? "(" + totalResults + ")" : ""
      }`;
    }
    if (hasAdvancedFilters) {
      const parts = [];
      if (sortBy) parts.push("sorted");
      if (minRating) parts.push(`rating >= ${minRating}`);
      if (yearFrom || yearTo) parts.push(`${yearFrom || "..."}-${yearTo || "..."}`);
      return `Discover movies (${parts.join(", ")})`;
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
          {!storeQuery && <AdvancedFilters show={showContent} />}
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
                    subtitle={movie.release_date?.split("-")[0]}
                    tags={movie.genre_ids}
                    genres={genres}
                    rating={movie.vote_average}
                    votes={movie.vote_count}
                    id={movie.id}
                  />
                ))}
              </MoviesWrapper>
            ) : (
              (selectedGenres.length > 0 || hasAdvancedFilters) && (
                <NoFilteredResults>
                  No movies found matching the selected filters.
                  <br />
                  Try adjusting your filters or clear them.
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
