import Image from "next/image";
import styles from "./pitchdecks.module.css";

export default function Pitchdecks() {
    return (
        <div className={styles.pitchdecks}>
            <div className={styles.pd_header}>
                <h1>2500+ Pitchdecks</h1>
                <p>that investors receive per year. How they will remember yours?</p>
            </div>
            <div className={styles.pd_contentDiv}>
                <div className={styles.imgDiv}>
                    <Image src='https://www.papermark.io/_static/michael.webp' alt='' width={150} height={150} />
                    <div className={styles.img_content}>
                        <h3>“ I will make them remember me, I will ”</h3>
                        <p>Michael Scott</p>
                    </div>
                </div>
                <div className={styles.pd_content}>
                    <h2>Send via Papermark = Share your personality</h2>
                    <p>
                        <strong>Open Source</strong> Host it yourself
                    </p>
                    <p>
                        <strong>Custom domain</strong> No more docsending you in the crowd
                    </p>
                    <p>
                        <strong>Feedback</strong> For each slide
                    </p>
                    <p>
                        <strong>Analytics</strong> Built in
                    </p>
                    <p>
                        <strong>Free</strong> You can use it for free
                    </p>
                </div>
            </div>
        </div>
    );
}
