import styles from "../../styles.module.css";
import {useState} from "react";

type props = {
   // onSearch: (searchTerm: string) => void;
}

function Search() {

    const [searchTerm, setSearchTerm] = useState("");

    const handleChange = (e) => {
        const value = e.target.value;
        setSearchTerm(value);
        //onSearch(value);
    };

    return (
        <div className={styles.searchContainer}>
            <input
                type="text"
                value={searchTerm}
                onChange={handleChange}
                placeholder="Search..."
                className={styles.searchInput}
            />
        </div>
    );
}

export {Search}