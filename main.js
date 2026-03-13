#!/usr/bin/env node

import fs from 'node:fs/promises';
import { Octokit } from 'octokit';

const { PERSONAL_ACCESS_TOKEN } = process.env;

if (!PERSONAL_ACCESS_TOKEN) {
  console.error('❌ PERSONAL_ACCESS_TOKEN environment variable is not set!');
  process.exit(1);
}

try {
  const octokit = new Octokit({ auth: PERSONAL_ACCESS_TOKEN });

  const { viewer } = await octokit.graphql(`
    query {
      viewer {
        sponsorsListing {
          activeGoal {
            description
            kind
            percentComplete
            targetValue
            title
          }
          featuredItems (featureableTypes: [REPOSITORY]) {
            featureable {
              ... on Repository {
                description
                languages (first: 1) {
                  nodes {
                    color
                    name
                  }
                }
                nameWithOwner
                stargazerCount
                url
              }
            }
          }
          shortDescription
          sponsorable {
            ... on User {
              avatarUrl
              location
              login
              name
              url
            }
          }
          url
        }
      }
    }
  `);

  await fs.writeFile('./index.json', JSON.stringify(viewer, null, 2));

  console.log('✅ Sponsors listing data saved to ./index.json');
  process.exit(0);
} catch (error) {
  console.error('❌ Could not fetch sponsors listing data!');
  console.error(error);
  process.exit(1);
}
