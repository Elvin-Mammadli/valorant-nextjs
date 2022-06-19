import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Valorant | Home</title>
        <meta name="keywords" content="valorant agents" />
      </Head>
      <div className={styles.main}>
        <div className={styles.headingBox}>
          <div className={styles.heading}>
            <h1>Valorant Soldiers</h1>
          </div>
        </div>
        <p className={styles.text}>Greetings dear user! This is the mini project I&apos;ve built while learning nextjs. You can go through various valorant agents and see details about them including their voices. I hope you will like it! :)</p>
        <Link href="/agents">
          <a className={styles.btn}>Agent listing</a>
        </Link>
      </div>
    </>
  )
}
