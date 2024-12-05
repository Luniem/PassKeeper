import {useState} from "react";
import {invoke} from "@tauri-apps/api/core";
import styles from "./styles.module.css";
import {HomeScreen} from "./screens/HomeScreen";

function App() {
    const [greetMsg, setGreetMsg] = useState("");
    const [name, setName] = useState("");

    async function greet() {
        // Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
        setGreetMsg(await invoke("greet", {name}));
    }

    return (
        <>
            <div className={styles.container}>
                <HomeScreen/>
            </div>
        </>
    );
}

export default App;
