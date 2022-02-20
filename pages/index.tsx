import type { NextPage } from 'next'
import Layout from '@/layouts/Layout'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <Layout>
      <main className={styles.main}>
        <h1 className={styles.title}>
          This is{' '}
          <a href='https://www.linkedin.com/in/chrisachinga/'>Chris Achinga</a>
        </h1>

        <p className={styles.description}>
          Welcome <code className={styles.code}>to my portfolio. About Me</code>
        </p>

        <div className={styles.grid}>
          <a
            href='https://docs.google.com/document/d/14rkWMF1pL1qF5eaQdFS0Na6CP0Y2yEv-1NPsuPOLZa8/edit?usp=sharing'
            className={styles.card}
          >
            <h2>Resume &rarr;</h2>
            <p>My detailed CV and Resume</p>
          </a>

          <a href='https://github.com/achingachris/' className={styles.card}>
            <h2>GitHub &rarr;</h2>
            <p>My Projects and Open Source Codes</p>
          </a>

          <a
            href='https://www.linkedin.com/in/chrisachinga/'
            className={styles.card}
          >
            <h2>LinkedIN &rarr;</h2>
            <p>My Professional Updates</p>
          </a>

          <a
            href='https://www.getrevue.co/profile/achinga_chris'
            className={styles.card}
          >
            <h2>Newsletter &rarr;</h2>
            <p>Subscribe to get bi-weekly updates about all tech</p>
          </a>
        </div>
      </main>
    </Layout>
  )
}

export default Home
