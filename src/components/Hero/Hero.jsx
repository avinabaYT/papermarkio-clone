import Link from "next/link";
import styles from "./Hero.module.css";
import GithubIcon from "../../icons/GithubIcon";

export default function Hero() {
    return (
        <div className={styles.hero}>
            <div className={styles.hero_underlay}>
                <div className={styles.background}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <div className={styles.hero_main}>
                <div className={styles.hero_content}>
                    <div className={styles.try_now}>
                        <span>Chat with your document.</span>
                        <Link href='/'>Try Now &rarr;</Link>
                    </div>
                    <div className={styles.hero_title}>
                        <h1>The Open-Source DocSend Alternative</h1>
                    </div>
                    <p className={styles.hero_description}>Share pitch decks, sales proposals and other docs securely with real-time analytics and white-labeling options.</p>
                    <div className={styles.hero_cta}>
                        <Link href='/' className='btn primaryBtn'>
                            Get Started
                        </Link>
                        <Link href='/' className='btn secondaryBtn'>
                            <GithubIcon />
                            Star on GitHub
                        </Link>
                    </div>
                </div>
                <div className={styles.hero_orgs}>
                    <img src='/assets/logo1.png' alt='logo1' />
                    <img src='/assets/logo2.png' alt='logo2' />
                    <img src='/assets/logo3.png' alt='logo3' />
                    <img src='/assets/logo4.png' alt='logo4' />
                    <img src='/assets/logo5.webp' alt='logo5' />
                </div>
            </div>
        </div>
    );
}
