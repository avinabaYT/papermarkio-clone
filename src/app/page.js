import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import Footer from "@/components/Footer/Footer";
import Pitchdecks from "@/components/Pitchdecks/Pitchdecks";
import Uploadshare from "@/components/Uploadshare/Uploadshare";
import Reviews from "@/components/Reviews/Reviews";

export default function Home() {
    return (
        <>
            <Header />
            <Hero />
            <Pitchdecks />
            <Uploadshare />
            <Reviews />
            <></>
            <Footer />
        </>
    );
}
