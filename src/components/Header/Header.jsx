import Link from "next/link";
import styles from "./Header.module.css";
import GithubIcon from "../../icons/GithubIcon";

export default function Header() {
    return (
        <div className={styles.header}>
            <Link href='/' className={styles.title}>
                Papermark
            </Link>
            <div className={styles.links}>
                <Link href='/' className='btn secondaryBtn'>
                    <GithubIcon />
                    Github
                </Link>
                <Link href='/login' className='btn primaryBtn'>
                    Share Document
                </Link>
            </div>
        </div>
    );
}
