import Head from 'next/head'
// import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Datum</title>
        <meta name="description" content="Generated by datum" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to, <span>datum!</span>
        </h1>

        <p className={styles.description}>
            WE FILL THE GAPS
        </p>

        <div className={styles.grid}>
          <a 
          href="https://github.com/mutairibassam/mutairibassam.github.io/blob/master/beat-android.md" 
          className={styles.card}
          >
            <h2>Beat-android &rarr;</h2>
            <p>Build a variety of apps, using the Java programming language.</p>
          </a>

          <Link href="/soon">
          <a 
          className={styles.card}
          >
            <h2>Beat-data &rarr;</h2>
            <p>Learn how gather, assess, and visualize your data!</p>
          </a>
          </Link>
          
          <Link href="/soon">
          <a
            className={styles.card}
          >
            <h2>Beat-git &rarr;</h2>
            <p>Control your projects, and learn how to contribute to open-source</p>
          </a>
          </Link>

          <Link href="/soon">
          <a
            className={styles.card}
          >
            <h2>Beat-flutter &rarr;</h2>
            <p>
              Develop cross platform applications from single codebase
            </p>
          </a>
          </Link>
        </div>
      </main>

      <footer className={styles.footer}>
        <a>
          Powered by datum
        </a>
      </footer>
    </div>
  )
}
