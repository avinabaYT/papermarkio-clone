import Upload from "../Upload/Upload";
import styles from "./Uploadshare.module.css";

export default function Uploadshare() {
    return (
        <div className={styles.uploadshare}>
            <div className={styles.us_header}>
                <h2>Upload, share and track documents</h2>
                <p>See Papermark in action</p>
            </div>
            <div className={styles.us_container}>
                <div className={styles.uploadBg}>
                    <Upload />
                </div>
            </div>
        </div>
    );
}
