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

  return (
    <div className={styles.ghContentContainer}>
      
      <section className={styles.additionalInfo}>
        <p>Updated {deltaDays}</p>
        <p>Latest commit message:</p>
        {commitMessage &&
          <p>{commitMessage}</p>
        }
        <div>
          <p>Languages: {
            repoLanguages.length !== 0 &&
            repoLanguages.map((language, index) => {
              return <span key={index}>{language} </span>
            })
          }</p>
        </div>
        <a href={repoUrl} target='blank'>
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
              parse(`${readme}`)
            }</div>
          }
        </div>
      </section>

    </div>
  )
}

export default GitHubContent