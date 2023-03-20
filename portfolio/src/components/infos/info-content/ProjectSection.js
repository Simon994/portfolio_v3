import styles from './ProjectSection.module.scss'

const ProjectSection = ({title, paragraphs, liveLink, liveTest, secondLink, secondTest, secondText, liveText='Live Version'}) => {
  return (
    <section className={styles.projectBlurb}>
      <h3>{title}</h3>
      {paragraphs?.map((paragraph, index) => {
        return (<p key={index}>{paragraph}</p>)
      })}
      <p><a
        href={liveLink}
        target="blank"
        data-cy={liveTest}
      >
        {liveText}
      </a> {secondText && ( 
        <> | <a
          href={secondLink}
          target="blank"
          data-cy={secondTest}
        >
          {secondText}
        </a></>)} </p>
      <p></p>
    </section>
  )
}

export default ProjectSection