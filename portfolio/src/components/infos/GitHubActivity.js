import React from 'react'
import { Octokit } from '@octokit/core'

function GitHubActivity() {
  const [commits, setCommits] = React.useState([])
  const octokit = new Octokit()


  React.useEffect(() => {
    const owner = 'Simon994',
      repo = 'countdown',
      perPage = 5

    async function getMostRecentCommits() {
      const fiveMostRecentCommits = await octokit.request(
        `GET /repos/${owner}/${repo}/commits`, { owner, repo, per_page: perPage }
      )
      return fiveMostRecentCommits
    }

    setCommits(getMostRecentCommits())
  }, [])

  return (
    <ul>
      {commits.map(commit => (
        <li key={commit.id}>
          {commit.author.name}: {commit.message}
        </li>
      ))}
    </ul>
  )
}

export default GitHubActivity