import React from 'react';
import styles from "../../styles.module.css";
import {PasswordEntry} from "../../models/passwordEntry";
import {Button} from "../reuse/Button";

type props = {
    isOpen: boolean;
    onClose: () => void;
    entry: PasswordEntry | null;
};

function Modal({isOpen, onClose, entry}: props) {
    if (!isOpen || !entry) return null;

    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modalContent}>
                <Button onClick={onClose} className={styles.closeButton} name={"X"}/>
                <h2>{entry.appName}</h2>
                <div className={styles.modalContentBlock}>
                    <img src={entry.logo} alt={entry.appName}/>
                    <div className={styles.modalContentText}>
                        <p><strong>Username:</strong> {entry.username}</p>
                        <p><strong>Password:</strong> {entry.passwordHash}</p>
                        <p><strong>Tag:</strong> {entry.tags}</p>
                    </div>
                </div>
                <a href={entry.url}>Visit Website</a>
            </div>
        </div>
    );
}

export {Modal};