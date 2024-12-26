import styles from "../styles.module.css";
import {useLocation} from "react-router-dom";

function DetailScreen() {
    const location = useLocation();
    const { entry } = location.state || {}

    if (!entry) {
        return <div>No entry found</div>;
    }

    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modalContent}>
                <h2>{entry.appName}</h2>
                <div className={styles.modalContentBlock}>
                    <img src={entry.logo} alt={entry.appName}/>
                    <div className={styles.modalContentText}>
                        <p><strong>Username:</strong> {entry.username}</p>
                        <p><strong>Password:</strong> {entry.passwordHash}</p>
                        <p><strong>Tag:</strong> {entry.tags}</p>
                    </div>
                </div>
                <a href={"https://"+entry.url}>Visit Website</a>
            </div>
        </div>
    );
}

export {DetailScreen};