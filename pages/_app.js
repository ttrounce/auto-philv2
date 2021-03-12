import '../styles/globals.sass'
import Head from 'next/head'
import style from '../styles/main.module.sass'

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>Sorty</title>
            </Head>
            <main className={style.main}>
                <div className={style.nav}>
                    <div className={style.container}>
                        <a className={style.title} href="/">
                            SORTY
                        </a>
                        <a className={style.nav_item} href="/balancer">
                            Balancer
                        </a>
                        <a className={style.nav_item} href="/teams">
                            Teams
                        </a>
                    </div>
                </div>
                <div className={style.content}>
                    <div className={style.container}>
                        <Component {...pageProps} />
                    </div>
                </div>
            </main>
        </>
    )
}

export default MyApp
