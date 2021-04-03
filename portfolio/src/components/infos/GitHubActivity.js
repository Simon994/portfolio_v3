import {useState, useEffect} from 'react'

import {
  getLatestGitHubEvent,
  getGitHubReadme,
  getGitHubLanguages
} from '../../lib/api'
import GitHubContent from './info-content/GitHubContent'
import styles from './GitHubActivity.module.scss'

function GitHubActivity() {
  const [repoUrl, setRepoUrl] = useState('')
  const [deltaDays, setDeltaDays] = useState('')
  const [commitMessage, setCommitMessage] = useState('')
  const [readme, setReadme] = useState('')
  const [repoLanguages, setRepoLanguages] = useState([])

  useEffect(() => {
    async function getMostRecentEvents() {
      try {
        const latestGitHubEvent = await getLatestGitHubEvent()
        const repoName = latestGitHubEvent.data[0].repo.name
        const newRepoUrl = `https://github.com/${repoName}`
        setRepoUrl(newRepoUrl)

        //Set state for how long ago the event happened, in days
        const eventDate = removeTimeFromDate(new Date(latestGitHubEvent.data[0].created_at))
        const currentDate = removeTimeFromDate(new Date())
        const dateDeltaDays = Math.floor((currentDate - eventDate) / (1000 * 60 * 60 * 24))
        if (dateDeltaDays === 0) {
          setDeltaDays('Today')
        } else if (dateDeltaDays === 1) {
          setDeltaDays('Yesterday')
        } else {
          setDeltaDays(`${dateDeltaDays} days ago`)
        }

        // Trim commit message to return only the first line
        setCommitMessage(trimCommitMessage(latestGitHubEvent))

        const readme = await getGitHubReadme(repoName)
        setReadme(readme)

        const languages = await getGitHubLanguages(repoName)
        setRepoLanguages(languages)
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
        <GitHubContent
          deltaDays={deltaDays}
          commitMessage={commitMessage}
          repoLanguages={repoLanguages}
          repoUrl={repoUrl}
          readme={readme}
        />
      </div>
    </div>
  )
}

const trimCommitMessage = (eventsResponse) => {
  const messageText = eventsResponse.data[0].payload.commits[0].message
  return messageText.split('\n')[0]
}

const removeTimeFromDate = (fullDate) => {
  return new Date(fullDate.getFullYear(), fullDate.getMonth(), fullDate.getDate())
}

export default GitHubActivity