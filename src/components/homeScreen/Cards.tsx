import styles from "../../styles.module.css";
import {useState} from "react";
import {PasswordEntry} from "../../models/passwordEntry"
import {Tags} from "../../models/tag";

const exampleData: PasswordEntry[] = [
    {
        appName: "TestApp1",
        logo: "https://via.placeholder.com/150?text=Logo+1",
        url: "www.App1.com",
        passwordHash: "Hash1",
        username: "App1User",
        tags: Tags.Shopping
    },
    {
        appName: "App2",
        logo: "https://via.placeholder.com/150?text=Logo+2",
        url: "www.App2.com",
        passwordHash: "Hash2",
        username: "App2User",
        tags: Tags.Shopping
    },
    {
        appName: "App3",
        logo: "https://via.placeholder.com/150?text=Logo+3",
        url: "www.App3.com",
        passwordHash: "Hash3",
        username: "App3User",
        tags: Tags.Gaming
    },
];

type FetchResult = {
    status: "loading" | "success" | "error";
    data: PasswordEntry[] | null;
    error: any;
};

function Cards() {
    const [result, setResult] = useState<FetchResult>({
        status: "success",
        data: exampleData,
        error: null,
    });

    const [sortBy, setSortBy] = useState<string>("appName");

    const handleSort = (criteria: string) => {
        setSortBy(criteria);
        const sortedData = [...result.data!].sort((a, b) => {
            if (criteria === "appName") {
                return a.appName.localeCompare(b.appName);
            }
            if (criteria === "tags") {
                return a.tags.localeCompare(b.tags);
            }
            return 0;
        });
        setResult((prev) => ({
            ...prev,
            data: sortedData,
        }));
    };

    return (
        <>
            <div>
                <div className={styles.sortLinks}>
                    <select
                        value={sortBy}
                        onChange={(e) => handleSort(e.target.value)}
                        className={styles.sortDropdown}
                    >
                        <option value="appName">Sort by App Name</option>
                        <option value="tags">Sort by Tags</option>
                    </select>
                </div>
            </div>

            <hr className={styles.separator}/>

            {result.status === "success" && (
                <div className={styles.cards}>
                    {Array.isArray(result.data)
                        ? result.data.map((d) => (
                            <div className={styles.cardsItem} key={d.appName}>
                                <img src={d.logo} alt={""}/>
                                <h3>{d.appName}</h3>
                                <p><strong>Username:</strong> {d.username}</p>
                                <p><strong>Password:</strong> {d.passwordHash}</p>
                                <p><strong>Tag:</strong> {d.tags}</p>
                                <a href={d.url}>Visit Website</a>
                            </div>
                        ))
                        : null}
                    {result.data == null && <p>No images available</p>}
                </div>
            )}

            {result.status === "error" && <p>{result.error.message}</p>}

            {result.status === "loading" && <p>Loading...</p>}
        </>
    );
}

export {Cards}
