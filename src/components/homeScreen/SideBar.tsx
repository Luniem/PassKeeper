import {Sidebar, Menu, MenuItem} from "react-pro-sidebar";
import {Link} from "react-router-dom";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded";
import ReceiptRoundedIcon from "@mui/icons-material/ReceiptRounded"
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import React from "react";

type props = {
    collapsed: boolean;
    toggleSidebar: () => void;
}

function SideBar({collapsed, toggleSidebar}: props) {
    return (
        <>
            <Sidebar backgroundColor='#2F2F47' collapsed={collapsed}>
                <Menu menuItemStyles={{
                    button: ({level, active}) => {
                        if (level === 0 || level === 1) {
                            return {
                                backgroundColor: active ? '#6E7688' : undefined,
                                color: active ? 'white' : undefined,
                                "&:hover": {
                                    backgroundColor: '#6E7688',
                                    color: 'white',
                                }
                            }
                        }
                    },
                }}>
                    <MenuItem
                        icon={<MenuOutlinedIcon/>}
                        onClick={() => {
                            toggleSidebar();
                        }}
                        style={{textAlign: "center"}}
                    />
                    <MenuItem
                        component={<Link to="dashboard" className="link"/>}
                        icon={<GridViewRoundedIcon/>}>
                        Dashboard
                    </MenuItem>
                    <MenuItem
                        component={<Link to="secureNotes" className="link"/>}
                        icon={<ReceiptRoundedIcon/>}>
                        Secure Notes
                    </MenuItem>
                </Menu>
            </Sidebar>
        </>
    );
}

export {SideBar};
