# Git Workflow Guide

## Remote Configuration

This repository uses a fork-based workflow with two remotes:

| Remote     | URL                                                              | Purpose                        |
|------------|------------------------------------------------------------------|--------------------------------|
| `origin`   | https://github.com/mayurimhatre1234-arch/movies-browser.git     | **Your fork** (push here)      |
| `upstream` | https://github.com/Urbork/movies-browser.git                    | Original repo (read-only)      |

## Pushing Rules

**MANDATORY: All pushes MUST go to `origin` (the forked repository).**

- NEVER push to `upstream`. You do not have write access.
- Always use `git push origin <branch>` explicitly.
- Do NOT use bare `git push` without specifying the remote, as it may default to `upstream`.

### Push Commands

```bash
# Correct - always specify origin
git push origin main
git push origin feature-branchName
git push origin feature-branchName -u   # set upstream tracking

# WRONG - never do these
git push                                 # may default to upstream
git push upstream main                   # no write access
git push upstream feature-branchName     # no write access
```

## Branch Naming Convention

Each feature gets its own branch with the `feature-` prefix:

```
feature-darkMode
feature-watchlist
feature-similarMovies
feature-recentlyViewed
feature-advancedFilters
```

## Feature Branch Workflow

1. **Create branch** from the latest working branch:
   ```bash
   git checkout -b feature-<name>
   ```

2. **Implement** the feature with focused commits.

3. **Commit** with a descriptive message:
   ```bash
   git commit -m "Add <feature description>"
   ```

4. **Push** to origin:
   ```bash
   git push origin feature-<name>
   ```

5. **Merge to main** when ready:
   ```bash
   git checkout main
   git merge feature-<name>
   git push origin main
   ```

## Syncing with Upstream

To pull latest changes from the original repo:

```bash
git fetch upstream
git checkout main
git merge upstream/main
git push origin main
```
