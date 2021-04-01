import { Octokit } from '@octokit/core'

export const getLatestGitHubEvent = () =>{
  const octokit = new Octokit()
  const latestEvent = octokit.request(
    '/users/{username}/events/public?per_page=1', { username: 'Simon994' }
  )
  return latestEvent
}

//Get README, as html, for specified repo
export const getGitHubReadme = async (repoName) => {
  const octokit = new Octokit()
  const response = await octokit.request(
    `/repos/${repoName}/readme`,
    {
      headers: {
        accept: 'application/vnd.github.VERSION.html'
      }
    }
  )
  return response.data
}

export const getGitHubLanguages = async (repoName) => {
  const octokit = new Octokit()
  const response = await octokit.request(`/repos/${repoName}/languages`)
  return Object.keys(response.data)
}