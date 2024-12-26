import React, {MouseEventHandler} from "react";
import styles from "../../styles.module.css";

type props = {
    type?:  "submit" | "reset" | "button" | undefined,
    icon?: React.ReactNode,
    name: string,
    onClick: MouseEventHandler<HTMLButtonElement> | undefined,
    className?: string
}

function Button({type, icon, name, onClick, className}: props) {
    return (
        <button className={className? className : styles.button} type={type} onClick={onClick}>
            {icon && <span className={styles.buttonIcon}>{icon}</span>}
            {name}
        </button>
    );
}

export {Button}