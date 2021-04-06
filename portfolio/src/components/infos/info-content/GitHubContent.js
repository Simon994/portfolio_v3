import React from 'react'
import styles from './GitHubContent.module.scss'
import parse from 'html-react-parser'

function GitHubContent(props) {

  const {
    deltaDays,
    commitMessage,
    repoLanguages,
    repoUrl,
    readme
  } = props

  const parsedReadmeLinkRemoved = parse(readme, {
    replace: ({ attribs }) => {
      if (attribs && attribs.class === 'octicon octicon-link') {
        return React.createElement(React.Fragment)
      }
    },
  })

  return (
    <div className={styles.ghContentContainer}>
      
      <section className={styles.additionalInfo}>
        <p>Updated <span className={styles.deltaDays}>{deltaDays}</span></p>
        <h4 className={styles.blurbHeader}>Latest commit message:</h4>
        {commitMessage &&
        <p className={styles.commitMessage}>{commitMessage}</p>
        }
        <div>
          <h4 className={styles.blurbHeader}>Languages:</h4>
          {
            repoLanguages.length !== 0 &&
            repoLanguages.map((language, index) => {
              return <p key={index} className={styles.language}>{language} </p>
            })
          }
        </div>
        <a href={repoUrl} target='blank' className={styles.repoLink}>
          Go to repo
        </a>
      </section>
      
      <section className={styles.readmeOuterContainer}>
        <div className={styles.readmeHeader}>
          <p>Repo README</p>
        </div>
        <div className={styles.readmeContentContainer}>
          {
            readme &&
            <div>{
              parsedReadmeLinkRemoved
            }</div>
          }
        </div>
      </section>

    </div>
  )
}

export default GitHubContent