import styles from "./Footer.module.css";

export default function Footer() {
    return (
        <div className={styles.footer}>
            <h1>Papermark.io</h1>
            <div className={styles.footer_col}>
                <span>Product</span>
                <a href='#'>Pricing</a>
                <a href='#'>GitHub</a>
                <a href='#'>Twitter</a>
            </div>
            <div className={styles.footer_col}>
                <span>Legal</span>
                <a href='#'>Privacy Policy</a>
            </div>
            <div className={styles.footer_col}>
                <span>Tools</span>
                <a href='#'>VC Generator</a>
                <a href='#'>Open Source Friends</a>
                <a href='#'>Open Source Investors</a>
                <a href='#'>Open Investor Database</a>
                <a href='#'>YC Application GPT</a>
                <a href='#'>FindVC</a>
                <a href='#'>Docsend Alternatives Finder</a>
            </div>
            <div className={styles.footer_col}>
                <span>Alternatives</span>
                <a href='#'>DocSend</a>
                <a href='#'>Pitch</a>
                <a href='#'>PandaDoc</a>
                <a href='#'>BriefLink</a>
                <a href='#'>Google-Drive</a>
            </div>
            <p>&#169; 2023 Papermark. All rights reserved.</p>
        </div>
    );
}
