import React from 'react'
import { Octokit } from '@octokit/core'

function GitHubActivity() {
  const [commits, setCommits] = React.useState([])
  const octokit = new Octokit()


  React.useEffect(() => {

    const owner = 'Simon994',
      repo = 'countdown',
      perPage = 5

    let fiveMostRecentCommits
    async function getMostRecentCommits() {

      console.log('I GET HERE!!! 🚨')
      try {
        fiveMostRecentCommits = await octokit.request(
          `GET /repos/${owner}/${repo}/commits`, { owner, repo, per_page: perPage }
        )
        console.log('COMMENTS???? 🏄🏼‍♂️', fiveMostRecentCommits.data)
      } catch (error) {
        console.error('SOMETHING WENT WRONG! :(', error)
      }
    }
    getMostRecentCommits()
    console.log('MOST RECENT HERE±!!!!!!!!', fiveMostRecentCommits)
    setCommits([fiveMostRecentCommits])

  }, [])

  return (
    <>
      <div>
        STARTING GITHUB ACTIVITY!!!
      </div>
      <ul>
        <li>
          Commits!! {commits && commits}
        </li>
      </ul>
    </>
  )
}

export default GitHubActivity