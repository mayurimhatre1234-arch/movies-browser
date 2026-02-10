# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Git Workflow (MUST follow)

See [docs/GIT_WORKFLOW.md](docs/GIT_WORKFLOW.md) for full details.

- **ALWAYS push to `origin`** (the fork): `git push origin <branch>`
- **NEVER use bare `git push`** or push to `upstream`
- Each feature gets its own branch: `feature-<name>`

## Build and Development Commands

```bash
npm start       # Start development server at http://localhost:3000
npm run build   # Create production build
npm run test    # Run test suite
npm run deploy  # Deploy to GitHub Pages (runs build first)
```

## Architecture Overview

Movies Browser is a React application for discovering movies and actors using The Movie Database (TMDB) API.

### Tech Stack
- **React 18** with **React Router DOM 5** (HashRouter for GitHub Pages compatibility)
- **Redux Toolkit** + **Redux-Saga** for state management and side effects
- **Styled-Components** for CSS-in-JS with theme support

### Project Structure

```
src/
├── api/           # TMDB API integration (fetchApi.js, api.js)
├── components/    # Reusable UI components (presentational)
├── config/        # Store, theme, and rootSaga configuration
├── core/          # App shell (routing, navigation, global styles)
├── features/      # Feature modules (movies, movieDetails, people, personDetails)
└── utils/         # Route builders, query parameter helpers
```

### Data Flow Pattern

1. Components dispatch actions or use URL query parameters
2. Sagas intercept async actions (via `takeLatest`)
3. Sagas call API through `fetchApi.js`
4. Sagas dispatch result actions to update Redux slices
5. Components read state via colocated selectors

### Key Conventions

**Feature Structure**: Each feature folder contains:
- `*Slice.js` - Redux Toolkit slice with reducers and selectors
- `*Saga.js` - Generator functions for async operations
- `index.js` + `styled.js` - Component logic and styles

**Component Structure**: Each component folder has:
- `index.js` - Component logic and JSX
- `styled.js` - Styled-components

**Routing**: Use route builders from `utils/routes.js`:
```javascript
toMovieDetailsPage({ id })  // Not hard-coded paths
toMoviesPage({ page })
```

**Theming**: Access design tokens via theme context:
```javascript
color: ${({ theme }) => theme.color.blue};
@media (max-width: ${({ theme }) => theme.breakpoint.medium}) { }
```

**URL Query Parameters**: Use custom hooks for search/pagination:
```javascript
useQueryParameter(searchQueryParamName)
useReplaceQueryParameters()
```

**Page States**: Global fetch status in `pageStateSlice.js`:
- `ready`, `loading`, `error`, `noResults`

### API Configuration

TMDB API with endpoints in `src/api/api.js`. Image URLs use different sizes for responsive design (w154/w342 for posters, w185/h632 for profiles).
