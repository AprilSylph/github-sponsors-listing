# GitHub Sponsors Listing

A GitHub Actions cron job which publishes your GitHub Sponsors listing API data to GitHub Pages.

## How to use

### Setup

1. Fork this repository
2. Enable Actions in your fork:
    - Settings &rarr; "Code and automation" &rarr; Actions &rarr; General
    - Select "Allow all actions and reusable workflows"
    - Click "Save"
3. Generate a Personal Access Token:
    - https://github.com/settings/tokens &rarr; "Generate new token" &rarr; "Generate new token (classic)"
    - Set "Note" to "github-sponsors-listing"
    - Set "Expiration" to "No expiration"
    - Set "Scopes" to `read:user`
    - Click "Generate token"
4. Add the Personal Access Token as a secret in your fork:
    - Settings &rarr; Security &rarr; "Secrets and variables" &rarr; Actions &rarr; "New repository secret"
    - Set "Name" to `PERSONAL_ACCESS_TOKEN`
    - Set "Secret" to the token you obtained in the previous step
5. Ensure that your fork has a `gh-pages` branch:
    - Code &rarr; Branches
    - If you don't see a `gh-pages` branch, create it via "New branch"

### Testing

Now is a good time to test that the Action can actually fetch your GitHub Sponsors listing.

Perform a test run in your fork via Actions &rarr; Main &rarr; "Run workflow" &rarr; "Run workflow".

If it succeeds, you should see your GitHub Sponsors listing output in the `gh-pages` branch as `index.json`.

If anything goes wrong, make sure you have followed the setup guide correctly, and try again.

### Publishing

1. Publish your `gh-pages` branch to GitHub Pages:
    - Settings &rarr; "Code and automation" &rarr; Pages
    - Set "Source" to "Deploy from a branch"
    - Set "Branch" to `gh-pages`
    - Click "Save"
2. Wait for GitHub Pages to deploy...
3. Done! Your GitHub Sponsors listing data is now published on the deployed site.

### Maintenance

If everything is set up correctly, the published data will be refreshed every 24 hours automatically.
