import {useState} from "react";
import {invoke} from "@tauri-apps/api/core";
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
            <div>
                <HomeScreen/>
            </div>
        </>
    );
}

export default App;
