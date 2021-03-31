import React from 'react'
import parse from 'html-react-parser'

import { getLatestGitHubEvent, getGitHubReadme } from '../../lib/api'
import styles from './GitHubActivity.module.scss'

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
    <div>
      <div className={styles.learningDividerTop}></div>
      <div className={styles.learningDividerMid}></div>
      <div className={styles.learningDividerBottom}></div>
      <div
        id='section4'
        className={styles.currentActivity}
        style={{ color: 'white' }}
      >
        <h1>Most recently Learning...</h1>
        <p>Here&apos;s a summary of my most recently-updated repo on GitHub.</p>
        <p>This data is provided via the GitHub API</p>
        <div className={styles.ghContentContainer}>
          <div className={styles.readmeOuterContainer}>
            <div className={styles.readmeHeader}>
              <p>Repo README</p>
            </div>
            <div className={styles.readmeContentContainer}>
              {
                readme &&
                <div>{
                  parse(`${readme}`)
                }</div>
              }
            </div>
          </div>
          <div className={styles.additionalInfo}>
            <p>Latest commit</p>
            {commitMessage &&
              <p>{commitMessage}</p>
            }
          </div>

        </div>


      </div>
    </div>
  )
}

const trimCommitMessage = (eventsResponse) => {
  const messageText = eventsResponse.data[0].payload.commits[0].message
  return messageText.split('\n')[0]
}

export default GitHubActivity