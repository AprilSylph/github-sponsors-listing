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
        login
        name
        sponsorsListing {
          activeGoal {
            description
            kind
            percentComplete
            targetValue
            title
          }
          shortDescription
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
