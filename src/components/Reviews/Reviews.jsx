import TwitterIcon from "@/icons/TwitterIcon";
import styles from "./Reviews.module.css";
import Link from "next/link";

export default function Reviews() {
    return (
        <div className={styles.reviews}>
            <div className={styles.reviews_header}>
                <h2>3000 people love Papermark and actively use it</h2>
                <p>Do not take it from us, listen what our happy users say</p>
            </div>
            <div className={styles.reviews_container}>
                <div className={styles.reviews_item}>
                    <div className={styles.review_content}>best thing is that all the save DocSend to PDF plugins that VCs use probably won't work 😁</div>
                    <div className={styles.review_profile}>
                        <div className={styles.review_profile_image}>
                            <img src='./vercel.svg' alt='profile' />
                        </div>
                        <div className={styles.review_profile_name}>
                            <strong>Jonathan Reimer</strong>
                            <p>@jonathimer</p>
                        </div>
                    </div>
                    <Link href='/' className={styles.review_icon}>
                        <TwitterIcon />
                    </Link>
                </div>
                <div className={styles.reviews_item}>
                    <div className={styles.review_content}>best thing is that all the save DocSend to PDF plugins that VCs use probably won't work 😁</div>
                    <div className={styles.review_profile}>
                        <div className={styles.review_profile_image}>
                            <img src='./vercel.svg' alt='profile' />
                        </div>
                        <div className={styles.review_profile_name}>
                            <strong>Jonathan Reimer</strong>
                            <p>@jonathimer</p>
                        </div>
                    </div>
                    <Link href='/' className={styles.review_icon}>
                        <TwitterIcon />
                    </Link>
                </div>
                <div className={styles.reviews_item}>
                    <div className={styles.review_content}>best thing is that all the save DocSend to PDF plugins that VCs use probably won't work 😁</div>
                    <div className={styles.review_profile}>
                        <div className={styles.review_profile_image}>
                            <img src='./vercel.svg' alt='profile' />
                        </div>
                        <div className={styles.review_profile_name}>
                            <strong>Jonathan Reimer</strong>
                            <p>@jonathimer</p>
                        </div>
                    </div>
                    <Link href='/' className={styles.review_icon}>
                        <TwitterIcon />
                    </Link>
                </div>
                <div className={styles.reviews_item}>
                    <div className={styles.review_content}>best thing is that all the save DocSend to PDF plugins that VCs use probably won't work 😁</div>
                    <div className={styles.review_profile}>
                        <div className={styles.review_profile_image}>
                            <img src='./vercel.svg' alt='profile' />
                        </div>
                        <div className={styles.review_profile_name}>
                            <strong>Jonathan Reimer</strong>
                            <p>@jonathimer</p>
                        </div>
                    </div>
                    <Link href='/' className={styles.review_icon}>
                        <TwitterIcon />
                    </Link>
                </div>
                <div className={styles.reviews_item}>
                    <div className={styles.review_content}>best thing is that all the save DocSend to PDF plugins that VCs use probably won't work 😁</div>
                    <div className={styles.review_profile}>
                        <div className={styles.review_profile_image}>
                            <img src='./vercel.svg' alt='profile' />
                        </div>
                        <div className={styles.review_profile_name}>
                            <strong>Jonathan Reimer</strong>
                            <p>@jonathimer</p>
                        </div>
                    </div>
                    <Link href='/' className={styles.review_icon}>
                        <TwitterIcon />
                    </Link>
                </div>
                <div className={styles.reviews_item}>
                    <div className={styles.review_content}>best thing is that all the save DocSend to PDF plugins that VCs use probably won't work 😁</div>
                    <div className={styles.review_profile}>
                        <div className={styles.review_profile_image}>
                            <img src='./vercel.svg' alt='profile' />
                        </div>
                        <div className={styles.review_profile_name}>
                            <strong>Jonathan Reimer</strong>
                            <p>@jonathimer</p>
                        </div>
                    </div>
                    <Link href='/' className={styles.review_icon}>
                        <TwitterIcon />
                    </Link>
                </div>
            </div>
        </div>
    );
}
