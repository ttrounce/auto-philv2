import Head from 'next/head'
import BalancerForm from './balancer/BalancerForm'
import mainStyle from '../styles/main.module.css'

export default function Home() {
    return (
        <div className={mainStyle.background}>
            <Head>
                <title>Sorty</title>
            </Head>
            <nav className={mainStyle.nav}>
                <div className={mainStyle.wrapper}>
                    <h1>Sorty</h1>
                    <ul>
                        <li><a href="balancer">Balancer</a></li>
                        <li><a href="statistics">Statistics</a></li>
                        <li><a href="report">Report Outcomes</a></li>
                    </ul>
                </div>
            </nav>
            <main className={mainStyle.wrapper}>
                <div className={mainStyle.form}>
                    <BalancerForm/>
                </div>
            </main>

            <footer>

            </footer>
        </div>
    )
}
