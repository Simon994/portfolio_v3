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

      console.log('I GET HERE!!! 🚨')
      try {
        const response = await octokit.request(
          `GET /repos/${owner}/${repo}/commits`, { owner, repo, per_page: perPage }
        )
        console.log('COMMENTS???? 🏄🏼‍♂️', response.data)
        setCommits(response.data)
      } catch (error) {
        console.error('SOMETHING WENT WRONG! :(', error)
      }
    }

    getMostRecentCommits()
  }, [])

  return (
    <>
      <ul>
        {
          commits.map((commit) => (
            <li key={commit.sha}>{commit.commit.message}</li>
          ))
        }
      </ul>
    </>
  )
}

export default GitHubActivity