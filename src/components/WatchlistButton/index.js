import { useDispatch, useSelector } from "react-redux";
import {
  toggleWatchlist,
  selectIsInWatchlist,
} from "../../features/watchlist/watchlistSlice";
import { HeartButton } from "./styled";

export const WatchlistButton = ({ movie, absolute }) => {
  const dispatch = useDispatch();
  const isInWatchlist = useSelector(selectIsInWatchlist(movie.id));

  const handleClick = (e) => {
    e.stopPropagation();
    e.preventDefault();
    dispatch(toggleWatchlist(movie));
  };

  return (
    <HeartButton
      onClick={handleClick}
      $active={isInWatchlist}
      $absolute={absolute}
      title={isInWatchlist ? "Remove from watchlist" : "Add to watchlist"}
    >
      {isInWatchlist ? "\u2764\uFE0F" : "\u{1F90D}"}
    </HeartButton>
  );
};
