import React, {useState} from 'react';
import {Tags} from "../models/tag";
import {Button} from "../components/reuse/Button";
import styles from "../styles.module.css";
import {PasswordEntry} from "../models/passwordEntry";
import { invoke } from '@tauri-apps/api/core';

type props = {
    handleCloseModal: () => void;
    title: string;
}

function AddEditPasswordScreen({handleCloseModal, title}: props) {
    const [id, setID] = useState('');
    const [appName, setAppName] = useState('');
    const [logo, setLogo] = useState("");
    const [username, setUsername] = useState('');
    const [passwordHash, setPasswordHash] = useState('');
    const [url, setUrl] = useState('');
    const [tags, setTags] = useState(Tags.Gaming);


    const handleSavePassword = (e: React.FormEvent) => {
        e.preventDefault();
        const newEntry: PasswordEntry = {
            id,
            appName,
            logo,
            url,
            passwordHash,
            username,
            tags
        };

        invoke("add_password", {passwordEntry: newEntry});

        console.log(newEntry);
        handleCloseModal();
    };

    const handleCancel = () => {
        handleCloseModal();
    }

    return (
        <>
            <div className={styles.addEditContainer}>
                <h2 className={styles.addEditTitle}>{title}</h2>
                <form onSubmit={handleSavePassword}>
                    <input className={styles.formInput} value={appName}
                           onChange={(e) => setAppName(e.target.value)}
                           placeholder="App Name"/>
                    <input className={styles.formInput} value={username}
                           onChange={(e) => setUsername(e.target.value)}
                           placeholder="Username"/>
                    <input className={styles.formInput} value={passwordHash}
                           onChange={(e) => setPasswordHash(e.target.value)}
                           placeholder="Password"/>
                    <input className={styles.formInput} value={url}
                           onChange={(e) => {
                               setUrl(e.target.value);
                               setLogo(e.target.value + "/favicon.ico");
                           }}
                           placeholder="URL"/>

                    <label htmlFor="tags">Tags:</label>
                    <select
                        className="selectTag"
                        value={tags}
                        onChange={(e) => setTags(e.target.value as Tags)}
                    >
                        {Object.values(Tags).map((tag) => (
                            <option key={tag} value={tag}>
                                {tag}
                            </option>
                        ))}
                    </select>
                    <div className={styles.formButtons}>
                        <Button type={"reset"} icon={""} name={"cancel"}
                                onClick={handleCancel} />
                       
                        <Button type={"submit"} icon={""} name={"save"}
                                onClick={handleSavePassword} />
                       
                    </div>
                </form>
            </div>
        </>
    )
}

export {AddEditPasswordScreen}