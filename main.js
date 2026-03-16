#!/usr/bin/env deno

import { Octokit } from 'octokit';

const PERSONAL_ACCESS_TOKEN = Deno.env.get('PERSONAL_ACCESS_TOKEN');

if (!PERSONAL_ACCESS_TOKEN) {
  console.error('❌ PERSONAL_ACCESS_TOKEN environment variable is not set!');
  Deno.exit(1);
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

  await Deno.mkdir('./out', { recursive: true });
  await Deno.writeTextFile('./out/index.json', JSON.stringify(viewer, null, 2));

  console.log('✅ Sponsors listing data saved to ./out/index.json');
  Deno.exit(0);
} catch (error) {
  console.error('❌ Something went wrong:');
  console.error(error);
  Deno.exit(1);
}
