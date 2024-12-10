import React, {MouseEventHandler} from "react";
import styles from "../../styles.module.css";

type props = {
    type:  "submit" | "reset" | "button" | undefined,
    icon: React.ReactNode,
    name: string,
    onClick: MouseEventHandler<HTMLButtonElement> | undefined
}

function Button({type, icon, name, onClick}: props) {
    return (
        <button className={styles.button} type={type} onClick={onClick}>
            {icon && <span className={styles.buttonIcon}>{icon}</span>}
            {name}
        </button>
    );
}

export {Button}