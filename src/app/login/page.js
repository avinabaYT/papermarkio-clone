import Link from "next/link";
import styles from "./page.module.css";
import GoogleIcon from "@/icons/GoogleIcon";
import LinkedinIcon from "@/icons/LinkedinIcon";
import PasskeyIcon from "@/icons/PasskeyIcon";

export default function LoginPage() {
    return (
        <div className={styles.loginpage}>
            <div className={styles.login_wrapper}>
                <h4 className={styles.login_header}>Papermark</h4>
                <p className={styles.login_subheader}>Start sharing documents</p>

                <input type='email' placeholder='example@xyz.com' />
                <Link href='/login' className='btn tertiaryBtn'>
                    Continue with Email
                </Link>

                <p className={styles}>or</p>

                <Link href='/login' className='btn tertiaryBtn'>
                    <GoogleIcon /> Continue with Google
                </Link>
                <Link href='/login' className='btn tertiaryBtn'>
                    <LinkedinIcon /> Continue with Linkedin
                </Link>
                <Link href='/login' className='btn primaryBtn'>
                    <PasskeyIcon /> Continue with a Passkey
                </Link>
            </div>
        </div>
    );
}
