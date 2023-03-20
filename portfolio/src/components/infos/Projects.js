/* eslint-disable react/no-unescaped-entities */
import React from 'react'

import FadeIn from './Fade'
import styles from './Projects.module.scss'

import ProjectSection from './info-content/ProjectSection'


const content = [
  {
    title: 'Commercial Project: Wurtec',
    paragraphs: ['A full-stack e-commerce web app for Wurtec, an elevator manufacturing business with branches across the US and international distribution. Used by large elevator customers such as Otis, Schindler, Kone, and Thyssen-Krupp.', 'Tech stack includes: React, NextJS, NodeJS, NestJS, Typescript, Prisma (connected to a PostgreSQL database)', 'The API layer interacts with a third-party headless CMS.'],
    liveLink: 'https://wurtec.com/',
    liveTest: 'live-wurtec',
    className: styles.projectImgContainerWurtec,
  },
  {
    title: 'Commercial Project: Racing For Recovery',
    paragraphs: ['A lifestyly mobile app for Racing For Recovery, a Non-profit organization.', 'Tech stack includes: React Native, Expo, EAS Build, React Native Paper and Styled Components, Strapi and Koa, Typescript', 'The App is available on Google Play and Apple App Store.'],
    liveLink: 'https://play.google.com/store/apps/details?id=com.racingForRecovery.app&pli=1',
    liveText: 'On Play Store',
    liveTest: 'live-r4r-play-store',
    secondLink: 'https://apps.apple.com/gb/app/racing-for-recovery/id1644577860',
    secondTest: 'live-r4r-play-store',
    secondText: 'On Apple App Store',
    className: styles.projectImgContainerR4R,
  },
  {
    title: 'Personal Learning Project: 499px (RAWshot)',
    paragraphs: ['A full-stack app, with multiple relationships and CRUD functionality, cloning key parts of the photo-sharing website 500px', 'Technologies include: Django, Django REST framework, React, PostgreSQL, SASS, Axios and Semantic UI React'],
    liveLink: 'https://github.com/Simon994/499px',
    liveText: 'Github repo',
    liveTest: 'live-499px',
    className: styles.projectImgContainerRawshot,
  },
  {
    title: 'Personal Learning Project: Discover Montreal',
    paragraphs: ['Full-stack MERN app with multiple relationships and CRUD functionality', 'Users can share, rate and comment on attractions around Montréal', 'Built in 9 days as part of a 4-person team. My focus was split ca.80:20 between frontend and backend, respectively'],
    liveLink: 'https://github.com/Simon994/sei-project-3',
    liveText: 'Github repo',
    liveTest: 'live-montreal',
    className: styles.projectImgContainerMontreal,
  },
  {
    title: 'Personal Learning Project: News Feed',
    paragraphs: ['A React app that consumes 3rd party API data from News API', 'My focus included building the top-stories section and other components, styling, bug-fixing, and contributing to overall project planning', 'Built in 3 days, as part of a two-person collaborative project'],
    liveLink: 'https://the-news-feed-v2-global.netlify.app/',
    liveText: 'Live version',
    liveTest: 'live-news-feed',
    secondLink: 'https://github.com/Simon994/news-feed-v2Global',
    secondTest: 'live-news-feed',
    secondText: 'Github',
    className: styles.projectImgContainerNewsFeed,
  }
]
  
const Projects = () => {
  return (
    <div id='section2'>   
      {content.map((project) => {
        return (
          <>
            <div className={project.className}></div>
            <FadeIn>
              <ProjectSection {...project}/>
            </FadeIn>
          </>
        )
      })}
    </div>
  )
}

export default Projects