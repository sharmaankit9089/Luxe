# Luxe

This repository contains:

- `frontend/`: the React application deployed to Vercel
- `backend/`: the FastAPI service validated in CI

## CI/CD

GitHub Actions workflow: `.github/workflows/main.yml`

The pipeline does the following:

- builds the frontend on every push and pull request to `main`
- validates the backend with dependency install, `flake8`, and `pytest` when tests exist
- deploys `frontend/` to Vercel on pushes to `main`

## Required GitHub Secrets

Add these repository secrets before using the deployment job:

- `VERCEL_TOKEN`: a Vercel personal or team token with deploy access
- `VERCEL_ORG_ID`: your Vercel org/team ID
- `VERCEL_PROJECT_ID`: your Vercel project ID for `luxe-frontend`

For this linked project, the current Vercel project ID is:

- `prj_oIpjPLgClxzpcMrmx39EaCQq0jT0`

The linked Vercel team ID found locally is:

- `team_6JWVk1hi7wb7qAbDOQe4Nhd9`
