import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Sorty</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Sorty
        </h1>

        <div className={styles.grid}>
          <div className={styles.card}>
            <h3>Template</h3>
            Template Card 1
          </div>

          <div className={styles.card}>
            <h3>Template</h3>
            Template Card 2
          </div>

          <div className={styles.card}>
            <h3>Template</h3>
            Template Card 3
          </div>

          <div className={styles.card}>
            <h3>Template</h3>
            Template Card 4
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        
      </footer>
    </div>
  )
}
