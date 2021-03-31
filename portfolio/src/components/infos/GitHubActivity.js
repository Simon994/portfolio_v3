import React from 'react'
import parse from 'html-react-parser'

import { getLatestGitHubEvent, getGitHubReadme } from '../../lib/api'

function GitHubActivity() {
  const [commitMessage, setCommitMessage] = React.useState(null)
  const [readme, setReadme] = React.useState(null)

  React.useEffect(() => {
    async function getMostRecentEvents() {
      try {
        const latestGitHubEvent = await getLatestGitHubEvent()
        const repoName = latestGitHubEvent.data[0].repo.name

        // Trim commit message to return only the first line
        setCommitMessage(trimCommitMessage(latestGitHubEvent))

        const readme = await getGitHubReadme(repoName)
        setReadme(readme)

      } catch (error) {
        console.error('SOMETHING WENT WRONG! :(', error)
      }
    }
    getMostRecentEvents()
  }, [])

  return (
    <>
      <div style={{ color: 'white' }}>
        <p>Latest commit</p>
        {commitMessage &&
            <p>{commitMessage}</p>
        }
        {
          readme &&
            <div>{
              parse(`${readme}`)
            }</div>
        }
      </div>
    </>
  )
}

const trimCommitMessage = (eventsResponse) => {
  const messageText = eventsResponse.data[0].payload.commits[0].message
  return messageText.split('\n')[0]
}

export default GitHubActivity