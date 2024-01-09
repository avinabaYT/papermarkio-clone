import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import Footer from "@/components/Footer/Footer";
import Pitchdecks from "@/components/Pitchdecks/Pitchdecks";
import Uploadshare from "@/components/Uploadshare/Uploadshare";
import Reviews from "@/components/Reviews/Reviews";
import GithubIcon from "@/icons/GithubIcon";

export default function Home() {
    return (
        <>
            <Header />
            <Hero />
            <Pitchdecks />
            <Uploadshare />
            <Reviews />
            <div className={styles.finalcta}>
                <div className={styles.finalcta_header}>
                    <h2>Build strong relationships with investors</h2>
                    <p>By sending presentations via Papermark</p>
                </div>
                <div className={styles.btns_wrapper}>
                    <button className='btn primaryBtn'>Start Now</button>
                    <button className='btn secondaryBtn'>
                        <GithubIcon /> Star on GitHub
                    </button>
                </div>
                <div className={styles.img_wrapper}>
                    <Image src='/assets/finalcta.png' alt='finalcta' width={450} height={450} />
                </div>
            </div>
            <Footer />
        </>
    );
}
