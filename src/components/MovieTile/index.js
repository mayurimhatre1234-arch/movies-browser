import { useSelector } from "react-redux";
import {
  MovieTileContent,
  MovieTileNavLink,
  MovieTileImage,
  MovieTileInfo,
  MovieTileTitle,
  MovieTileSubtitle,
  MovieTileInfoWrapper,
} from "./styled";
import noPoster from "../../assets/noPoster.svg";
import { MovieTags } from "../MovieTags";
import { MovieRating } from "../MovieRating";
import { posterMainSizeUrl, posterMobileSizeUrl } from "../../api/api";
import { selectMobile } from "../../features/pageStateSlice";
import { toMovieDetailsPage } from "../../utils/routes";
import { WatchlistButton } from "../WatchlistButton";

export const MovieTile = ({
  poster,
  title,
  subtitle,
  tags,
  genres,
  rating,
  votes,
  id,
}) => {
  const mobile = useSelector(selectMobile);
  const posterUrl = mobile ? posterMobileSizeUrl : posterMainSizeUrl;

  return (
    <MovieTileContent>
      <WatchlistButton
        movie={{ id, title, poster_path: poster, release_date: subtitle ? `${subtitle}-01-01` : "", genre_ids: tags || [], vote_average: rating, vote_count: votes }}
        absolute
      />
      <MovieTileNavLink to={toMovieDetailsPage({ id: id })}>
        <MovieTileImage
          src={poster ? posterUrl + poster : noPoster}
          alt={title ? `${title} movie poster` : "no poster"}
        />
        <MovieTileInfoWrapper>
          <MovieTileInfo>
            <MovieTileTitle>{title}</MovieTileTitle>
            <MovieTileSubtitle>{subtitle}</MovieTileSubtitle>
            <MovieTags tags={tags} genres={genres} />
          </MovieTileInfo>
          <MovieRating rating={rating} votes={votes} />
        </MovieTileInfoWrapper>
      </MovieTileNavLink>
    </MovieTileContent>
  );
};
