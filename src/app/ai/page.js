import Header from "@/components/Header/Header";
import styles from "./page.module.css";
import Footer from "@/components/Footer/Footer";
import MegaphoneIcon from "@/icons/MegaphoneIcon";
import Upload from "@/components/Upload/Upload";
import Faqs from "@/components/Faqs/Faqs";

export default function aiPage() {
    return (
        <>
            <Header />

            <main className={styles.ai}>
                <section className={styles.one}>
                    <div className={styles.pop_header}>
                        <MegaphoneIcon />
                        <p>Papermark AI</p>
                    </div>
                    <div className={styles.header}>AI Documents Asisstant</div>
                    <div className={styles.sub_header}>Powerful Ai-assitant for your shared and received documents</div>
                    <div className={`btn secondaryBtn ${styles.btn}`}>Chat with our pitchdeck &#8595;</div>
                    <div className={styles.chat_wrapper}></div>
                    <div className={`btn secondaryBtn ${styles.btn}`}>Sign up to use Papermark AI</div>
                </section>
                <section className={styles.two}>
                    <div className={styles.header}>Use AI assistant in both cases</div>
                    <div className={styles.sub_header}>AI-powered platform revolutionizing document sharing and collaboration. It enables secure document sharing, advanced tracking, and storage, providing users with real-time analytics.</div>
                    <div className={styles.features_wrapper}>
                        <div className={styles.feature}>
                            <div className={styles.feature_header}>Shared Documents</div>
                            <div className={styles.feature_subheader}>Designed for interacting and improving your documents before sharing</div>
                            <ul className={styles.feature_ul}>
                                <li className={styles.feature_li}>AI-powered insights on shared documents</li>
                                <li className={styles.feature_li}>Enchance document before sharing</li>
                                <li className={styles.feature_li}>Check grammar and errors</li>
                                <li className={styles.feature_li}>Get feedbback on your Pitch Deck or Sales Deck</li>
                                <li className={styles.feature_li}>Turn your Pitch Deck into memo</li>
                                <li className={styles.feature_li}>Compare your Pitch Deck with other</li>
                            </ul>
                            <div className='btn secondaryBtn'>Use Papermark AI</div>
                        </div>
                        <div className={styles.feature}>
                            <div className={styles.feature_header}>Received Documents</div>
                            <div className={styles.feature_subheader}>AI functionality helps you to analyse the received document in click</div>
                            <ul className={styles.feature_ul}>
                                <li className={styles.feature_li}>Chat with received documents</li>
                                <li className={styles.feature_li}>Use AI to find info in received doc</li>
                                <li className={styles.feature_li}>Summarise received document</li>
                                <li className={styles.feature_li}>Turn Pitch Deck into Memo</li>
                                <li className={styles.feature_li}>Get quick insigts on Pitch Deck</li>
                                <li className={styles.feature_li}>Compare Pitch Decks with other docs</li>
                            </ul>
                            <div className='btn secondaryBtn'>Use Papermark AI</div>
                        </div>
                    </div>
                </section>
                <section className={styles.three}>
                    <div className={styles.header}>Chat with your document or one shared with you</div>
                    <div className={styles.sub_header}>Upload your document, pitch deck, sales deck and get insights on it. Instanlty chat with received pdf, or other document.</div>
                    <Upload color1='#040712' color2='#eff1f350' />
                    <div className={styles.features_container}>
                        <div className={styles.feature_div}>
                            <div className={styles.feature_icon}>⚙️</div>
                            <p className={styles.feature_text}>
                                <strong>AI-Powered Document Interaction</strong> Papermark AI is your personal assistant for interacting with various documents like pitch decks, sales decks, and PDFs, enhancing your document management and sharing experience.
                            </p>
                        </div>
                        <div className={styles.feature_div}>
                            <div className={styles.feature_icon}>🔒</div>
                            <p className={styles.feature_text}>
                                <strong>Secure Document Sharing</strong> With Papermark AI, securely share and manage your documents, ensuring confidential information remains protected.
                            </p>
                        </div>
                        <div className={styles.feature_div}>
                            <div className={styles.feature_icon}>🔃</div>
                            <p className={styles.feature_text}>
                                <strong>Real-Time Analytics</strong> Get insights into how your documents are being interacted with, including detailed analytics on pitch decks and sales materials.
                            </p>
                        </div>
                        <div className={styles.feature_div}>
                            <div className={styles.feature_icon}>🔗</div>
                            <p className={styles.feature_text}>
                                <strong>Custom Link Sharing</strong> Papermark AI allows you to create custom links for your documents, making it easier and more professional when sharing with clients or investors.
                            </p>
                        </div>
                        <div className={styles.feature_div}>
                            <div className={styles.feature_icon}>💾</div>
                            <p className={styles.feature_text}>
                                <strong>Community Support</strong> Leverage the strength of a community that continuously contributes to improving and evolving Papermark AI.
                            </p>
                        </div>
                        <div className={styles.feature_div}>
                            <div className={styles.feature_icon}>🛃</div>
                            <p className={styles.feature_text}>
                                <strong>Open Source</strong> Enjoy the flexibility of an open-source platform, allowing you to tailor Papermark AI to your specific document interaction needs.
                            </p>
                        </div>
                    </div>
                </section>
                <section className={styles.four}>
                    <div className={styles.review_container}>
                        <div className={styles.img_container}></div>
                        <div className={styles.review_info}>
                            <div className={styles.review_text}>This looks awesome!! Incredible work – love how the link was automatically copied to clipboard when it's created.</div>
                            <div className={styles.review_author}>Avinaba Mazumdar</div>
                            <div className={styles.review_author_title}>Remote FrontEnd Developer</div>
                        </div>
                    </div>
                </section>
                <section>
                    <Faqs />
                </section>
            </main>

            <Footer />
        </>
    );
}
