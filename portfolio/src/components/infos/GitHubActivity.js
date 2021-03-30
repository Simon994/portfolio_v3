import React from 'react'
import { Octokit } from '@octokit/core'

function GitHubActivity() {
  const [events, setEvents] = React.useState([])
  const [readme, setReadme] = React.useState(null)
  const octokit = new Octokit()


  React.useEffect(() => {

    const eventsPerPage = 1

    async function getMostRecentEvents() {
      try {
        const response = await octokit.request(
          `/users/{username}/events/public?per_page=${eventsPerPage}`, { username: 'Simon994' }
        )

        const repoName = response.data[0].repo.name
        setEvents(response.data)


        const readmeResponse = await octokit.request(
          `/repos/${repoName}/readme`,
          {
            headers: {
              accept: 'application/vnd.github.VERSION.html'
            }
          }
        )
        console.log('GOT README RESPONSE!!!!>>>>>', readmeResponse)
        setReadme(readmeResponse.data)
      } catch (error) {
        console.error('SOMETHING WENT WRONG! :(', error)
      }
    }

    getMostRecentEvents()
  }, [])

  return (
    <>
      <div style={{ color: 'white' }}>
        {events.length &&
            <p>{events[0].payload.commits[0].message}</p>
        }
        {
          readme &&
            <div>{readme}</div>
        }
      </div>
    </>
  )
}

export default GitHubActivity