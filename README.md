# GitHub Sponsors Listing

A GitHub Actions cron job which publishes your GitHub Sponsors listing API data to GitHub Pages.

## How to use

### Setup

1. Fork this repository
2. Enable Actions in your fork:
    - Go to your fork's **Settings** &rarr; **Code and automation** &rarr; **Actions** &rarr; **General**
    - Select "Allow all actions and reusable workflows"
    - Click "Save"
3. Generate a Personal Access Token:
    - Go to your account's [**Personal access tokens**](https://github.com/settings/tokens)
    - Click "Generate new token" &rarr; "Generate new token (classic)"
    - Set "Note" to "github-sponsors-listing"
    - Set "Expiration" to "No expiration"
    - For "Scopes", select "read:user"
    - Click "Generate token"
4. Add the Personal Access Token as a secret in your fork:
    - Go to your fork's **Settings** &rarr; **Security** &rarr; **Secrets and variables** &rarr; **Actions**
    - Click "New repository secret"
    - Set "Name" to `PERSONAL_ACCESS_TOKEN`
    - Set "Secret" to the token you obtained in the previous step
    - Click "Add secret"
5. Configure GitHub Pages in your fork:
    - Go to your fork's **Settings** &rarr; **Code and automation** &rarr; **Pages**
    - Set "Source" to "GitHub Actions"

### First deploy

- In your fork, go to **Actions** &rarr; **GitHub Pages**
- Click "Run workflow" &rarr; "Run workflow"
- Wait for the _Build_ and _Deploy_ jobs to run...
- All done! A link to your published GitHub Pages site should appear in the action summary.

Be sure to visit the published GitHub Pages site to see what data is available there.

### Scheduled updates

Assuming the first deploy went well, there's nothing else you need to do.

The published data will be refreshed every 24 hours automatically.

To unpublish the data, go to your fork's **Settings** &rarr; **Pages** and click "Unpublish site".
