import React from 'react'
import { Octokit } from '@octokit/core'

function GitHubActivity() {
  const [events, setEvents] = React.useState([])
  const octokit = new Octokit()


  React.useEffect(() => {

    const eventsPerPage = 1

    async function getMostRecentEvents() {
      try {
        const response = await octokit.request(
          `/users/{username}/events/public?per_page=${eventsPerPage}`, { username: 'Simon994' }
        )
        console.log('COMMENTS???? 🏄🏼‍♂️', response.data)
        setEvents(response.data)
      } catch (error) {
        console.error('SOMETHING WENT WRONG! :(', error)
      }
    }

    getMostRecentEvents()
  }, [])

  return (
    <>
      <div style={{color: 'white'}}>
        {events.length &&
          events[0].payload.commits[0].message
        }
      </div>
    </>
  )
}

export default GitHubActivity