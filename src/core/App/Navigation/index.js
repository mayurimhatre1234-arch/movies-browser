import { useSelector } from "react-redux";
import {
  Container,
  Wrapper,
  LogoButtonsWrapper,
  AppName,
  Video,
  InputWrapper,
  ButtonsWrapper,
  StyledNavLink,
  LogoLink,
} from "./styled";
import {
  selectCurrentMoviePage,
  selectCurrentPeoplePage,
  backToHome,
} from "../../../features/pageStateSlice";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import { useDispatch } from "react-redux";
import {
  toMoviesPage,
  toPeoplePage,
  toWatchlistPage,
} from "../../../utils/routes";
import { SearchInput } from "./SearchInput";
import { ThemeToggle } from "../../../components/ThemeToggle";
import { selectWatchlistCount } from "../../../features/watchlist/watchlistSlice";

export const Navigation = () => {
  const currentMoviePage = useSelector(selectCurrentMoviePage);
  const currentPeoplePage = useSelector(selectCurrentPeoplePage);
  const watchlistCount = useSelector(selectWatchlistCount);
  const location = useLocation();
  const pathName = location.pathname.split("/")[1];
  const dispatch = useDispatch();

  return (
    <Container>
      <Wrapper>
        <LogoButtonsWrapper>
          <LogoLink to="/" onClick={() => dispatch(backToHome())}>
            <AppName>
              <Video />
              Movies Browser
            </AppName>
          </LogoLink>
          <ButtonsWrapper>
            <StyledNavLink
              to={toMoviesPage({ page: currentMoviePage })}
              $active={pathName === "movies"}
            >
              Movies
            </StyledNavLink>
            <StyledNavLink
              to={toPeoplePage({ page: currentPeoplePage })}
              $active={pathName === "people"}
            >
              People
            </StyledNavLink>
            <StyledNavLink
              to={toWatchlistPage()}
              $active={pathName === "watchlist"}
            >
              Watchlist{watchlistCount > 0 ? ` (${watchlistCount})` : ""}
            </StyledNavLink>
            <ThemeToggle />
          </ButtonsWrapper>
        </LogoButtonsWrapper>
        <InputWrapper>
          <SearchInput />
        </InputWrapper>
      </Wrapper>
    </Container>
  );
};
