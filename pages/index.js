import Head from 'next/head'
import ProgressChart from '../components/charts/ProgressChart'
import styles from '../styles/Home.module.css'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h5 className={styles.title}>
          Fiano Dashboard
        </h5>

        <div className={styles.grid}>
          <div className={styles.card}>
            <ProgressChart />
          </div>
          <div className={styles.card}>
            <ProgressChart />
          </div>
          <div className={styles.card}>
            <p>Test</p>
          </div>
          <div className={styles.card}>
            <p>Test</p>
          </div>
          <div className={styles.card}>
            <p>Test</p>
          </div>
        </div>

      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Made by adylanrff
        </a>
      </footer>
    </div>
  )
}
