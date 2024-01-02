import Link from "next/link";
import styles from "./Header.module.css";
import GithubIcon from "../../icons/GithubIcon";

export default function Header() {
    return (
        <div className={styles.header}>
            <h1 className={styles.title}>Papermark</h1>
            <div className={styles.links}>
                <Link href='/' className='btn secondaryBtn'>
                    <GithubIcon />
                    Github
                </Link>
                <Link href='/' className='btn primaryBtn'>
                    Share Document
                </Link>
            </div>
        </div>
    );
}
