import {Sidebar, Menu, MenuItem} from "react-pro-sidebar";
import {Routes, Route, Link} from "react-router-dom";
import styles from "../../styles.module.css";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import ShieldRoundedIcon from "@mui/icons-material/ShieldRounded";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import ReceiptRoundedIcon from "@mui/icons-material/ReceiptRounded";
import {Dashboard} from "./Dashboard";

function SideBar() {
    return (
        <>
            <div className={styles.sidebar}>
                <Sidebar >
                    <Menu className={styles.app}>
                        <MenuItem component={<Link to="dashboard" className="link"/>}
                                  icon={<GridViewRoundedIcon/>}> Dashboard </MenuItem>
                        <MenuItem component={<Link to="passwords" className="link"/>}
                                  icon={<ShieldRoundedIcon/>}> Passwords </MenuItem>
                        <MenuItem component={<Link to="personalInfo" className="link"/>}
                                  icon={<AccountCircleRoundedIcon/>}> Personal Info </MenuItem>
                        <MenuItem component={<Link to="secureNotes" className="link"/>}
                                  icon={<ReceiptRoundedIcon/>}> Secure Notes </MenuItem>
                    </Menu>
                </Sidebar>
                <section className={styles.section}>
                    <Routes>
                        <Route path="dashboard" element={<Dashboard/>}/>
                    </Routes>
                </section>
            </div>
        </>
    );
}

export {SideBar}
