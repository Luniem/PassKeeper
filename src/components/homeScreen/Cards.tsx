import styles from "../../styles.module.css";
import {useEffect, useState} from "react";
import {PasswordEntry} from "../../models/passwordEntry";
import {Tags} from "../../models/tag";
import {Modal} from "../detailScreen/Modal";
import {Link} from "react-router-dom";
import { invoke } from "@tauri-apps/api/core";

type FetchResult = {
    status: "loading" | "success" | "error";
    data: PasswordEntry[] | null;
    error: any;
};

type Props = {
    searchTerm: string;
};

function Cards({searchTerm}: Props) {

    useEffect(() => {
        async function fetchEntries() {
            const entries = await invoke<PasswordEntry[]>("get_password_entries");
            setResult({
                data: entries,
                error: null,
                status: "success"
            })
        }

        fetchEntries()
    }, []) 

    const [result, setResult] = useState<FetchResult>({
        status: "success",
        data: null,
        error: null,
    });


    const [sortBy, setSortBy] = useState<string>("");
    const [selectedEntry, setSelectedEntry] = useState<PasswordEntry | null>(null);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    const filteredData = result.data
        ? result.data.filter((entry) =>
            entry.appName.toLowerCase().includes(searchTerm.toLowerCase()) ||
            entry.url.toLowerCase().includes(searchTerm.toLowerCase()) ||
            entry.username.toLowerCase().includes(searchTerm.toLowerCase())
        )
        : [];

    const sortedData = [...filteredData].sort((a, b) => {
        if (sortBy === "appName") {
            return a.appName.localeCompare(b.appName);
        }
        if (sortBy === "tags") {
            return a.tags.localeCompare(b.tags);
        }
        return 0;
    });

    const openModal = (entry: PasswordEntry) => {
        setSelectedEntry(entry);

        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedEntry(null);
    };

    const handleSort = (criteria: string) => {
        setSortBy(criteria);
    };

    return (
        <>
            <div>
                <div className={styles.sortLinks}>
                    <select
                        onChange={(e) => handleSort(e.target.value)}
                        className={styles.sortDropdown}
                    >
                        <option value="" disabled hidden>Sort by</option>
                        <option value="appName">App Name</option>
                        <option value="tags">Tags</option>
                    </select>
                </div>
            </div>

            <hr className={styles.separator}/>

            {result.status === "success" && (
                <div className={styles.cards}>
                    {Array.isArray(sortedData) && sortedData.length > 0 ? (
                        sortedData.map((d, index) => (
                            <div className={styles.cardsItem} key={index} onClick={() => openModal(d)}>
                                <img src={"//" + d.logo} alt={""}/>
                                <h3>{d.appName}</h3>
                                <p>Username: {d.username}</p>
                                <p>Password: {d.passwordHash}</p>
                                <p>Tag: {d.tags}</p>
                                <a href={"https://"+d.url} target="_blank" rel="noopener noreferrer">Visit Website</a>
                            </div>
                        ))
                    ) : (
                        <p>No results found</p>
                    )}
                </div>
            )}

            {result.status === "error" && <p>{result.error.message}</p>}
            {result.status === "loading" && <p>Loading...</p>}

            <Modal isOpen={isModalOpen} onClose={closeModal} entry={selectedEntry}/>
        </>
    );
}

export {Cards};