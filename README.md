# Publicize Git Org Membership
Tool to publicize GitHub organization membership for large organizations

## Description

GitHub provides [instructions](https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-personal-account-on-github/managing-your-membership-in-organizations/publicizing-or-hiding-organization-membership) on how to publicize or hide a user's membership to a given organization.
However, the tools provided can fail to locate the user for organizations with a large number of members (100k+).

This Node project provides a simple way to overcome this limitation and modify membership visibility to public on large GitHub organizations.

## Instructions

1. Install [Node](https://nodejs.org/en) v18+.
2. Install [Octokit](https://github.com/octokit/core.js#readme), using `npm install @octokit/rest`.
3. Generate a Personal Access Token (Classic) with `write:org` permissions. 
4. Copy the newly generated token and replace the `TOKEN` string in `index.js` with it.
5. Also in `index.js`, replace the ORGANIZATION and MEMBER strings with the target organization and member username.
6. Run `node index.js` to update that user's membership visibility to public in the target organization.

