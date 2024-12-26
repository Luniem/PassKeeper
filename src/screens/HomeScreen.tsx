import {Header} from "../components/homeScreen/Header";
import {SideBar} from "../components/homeScreen/SideBar";
import {useState} from "react";
import { Routes, Route } from "react-router-dom";
import {Dashboard} from "../components/homeScreen/Dashboard";
import styles from "../styles.module.css";
import {DetailScreen} from "./DetailSceen";

function HomeScreen() {
    const [menuCollapse, setMenuCollapse] = useState(true);

    const toggleSidebar = () => {
        setMenuCollapse(!menuCollapse);
    };
    return (
        <>
            <div style={{display: 'flex', flexDirection: 'column', height: '100vh'}}>
                <Header />
                <div className={styles.sidebarContainer}>
                <SideBar collapsed={menuCollapse} toggleSidebar={toggleSidebar}/>
                    <main className={styles.section}>
                        <Routes>
                            <Route path="dashboard" element={<Dashboard />} />
                            <Route path="/" element={<Dashboard />} />
                            <Route path="detail" element={<DetailScreen />} />
                        </Routes>
                    </main>
                </div>
            </div>
        </>
    );
}

export {HomeScreen}