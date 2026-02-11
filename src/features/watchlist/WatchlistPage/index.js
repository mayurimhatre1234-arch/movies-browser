import { useSelector } from "react-redux";
import { selectWatchlistMovies } from "../watchlistSlice";
import { selectGenres } from "../../movies/moviesSlice";
import { Section } from "../../../components/Section";
import { MoviesWrapper } from "../../../components/MoviesWrapper";
import { MovieTile } from "../../../components/MovieTile";
import { EmptyMessage } from "./styled";

export const WatchlistPage = () => {
  const movies = useSelector(selectWatchlistMovies);
  const genres = useSelector(selectGenres);

  return (
    <>
      <Section title={`Watchlist (${movies.length})`} show={true}>
        {movies.length > 0 ? (
          <MoviesWrapper $show={true}>
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
          <EmptyMessage>
            Your watchlist is empty.
            <br />
            Click the heart icon on any movie to add it here.
          </EmptyMessage>
        )}
      </Section>
    </>
  );
};
