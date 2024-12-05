import {Header} from "../components/homeScreen/Header";
import {SideBar} from "../components/homeScreen/SideBar";
import {Dashboard} from "../components/homeScreen/Dashboard";

function HomeScreen() {
    return (
        <>
            <div>
                <Header/>
                <SideBar/>
                <Dashboard/>
            </div>
        </>
    );
}

export {HomeScreen}