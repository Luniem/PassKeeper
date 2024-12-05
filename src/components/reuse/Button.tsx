import {MouseEventHandler} from "react";
import styles from "../../styles.module.css";

type props = {
    icon: string,
    name: string,
    onClick: MouseEventHandler<HTMLButtonElement> | undefined
}

function Button({icon, name, onClick}: props) {
    return (
        <button className={styles.button} type="button" onClick={onClick}>
            {name}
        </button>
    );
}

export {Button}