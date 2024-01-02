"use client";

import { useState } from "react";
import styles from "./Uploadshare.module.css";
import Image from "next/image";

export default function Uploadshare() {
    const [image, setImage] = useState(null);
    const [filename, setFilename] = useState("");
    const [filesize, setFilesize] = useState("");

    const inputClick = () => {
        document.querySelector("#file").click();
    };

    return (
        <div className={styles.uploadshare}>
            <div className={styles.us_header}>
                <h2>Upload, share and track documents</h2>
                <p>See Papermark in action</p>
            </div>
            <div className={styles.us_container}>
                <div className={styles.uploadBg}>
                    <div className={styles.uploadPopup}>
                        <div className={styles.uploadPopup_head}>
                            <h4>Share a Document</h4>
                            <p>After you upload the document, a shareable link will be generated and copied to your clipboard.</p>
                        </div>

                        <div className={styles.uploadPopup_space} onClick={inputClick} style={image ? { justifyContent: "flex-start" } : {}}>
                            <div className={styles.uploadPopup_spaceLeft}>{image ? <Image src={image} alt='image' width={150} height={150} /> : ""}</div>
                            <div className={styles.uploadPopup_spaceRight}>
                                <h5>{filename ? filename : "No file chosen"}</h5>
                                <p>{filesize ? filesize + " MB" : ""}</p>
                            </div>
                        </div>

                        <input
                            type='file'
                            name='file'
                            id='file'
                            accept='image/*'
                            className={styles.us_inputfile}
                            hidden
                            onChange={({ target: { files } }) => {
                                console.log(files[0]);
                                files[0] && setFilename(files[0].name);
                                if (files[0]) {
                                    const size = (files[0].size / 1024 / 1024).toFixed(2);
                                    setFilesize(size);

                                    setImage(URL.createObjectURL(files[0]));
                                }
                            }}
                        />

                        <div className='btn primaryBtn' onClick={inputClick}>
                            Upload Document
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
