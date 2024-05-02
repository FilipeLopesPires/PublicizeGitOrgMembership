// Octokit.js (https://github.com/octokit/core.js#readme)
const { Octokit } = require('@octokit/rest');

async function AddMemberToGitOrg() {
  const octokit = new Octokit({
    auth: 'TOKEN' // Replace with your Token (Classic). Must have write:org permissions.
  });

  try {
    await octokit.request('PUT /orgs/ORGANIZATION/public_members/MEMBER', { // Replace with Organization name and Member username.
      headers: {
        'X-GitHub-Api-Version': '2022-11-28'
      }
    });

    console.log('Member added successfully.');
  } catch (error) {
    console.error('Error: Failed to add member due to: ', error.message);
  }
}

AddMemberToGitOrg();