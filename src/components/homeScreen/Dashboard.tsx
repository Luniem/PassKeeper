import {Cards} from "./Cards";
import {Button} from "../reuse/Button";
import {Search} from "./Search";
import AddIcon from '@mui/icons-material/Add';
import {useState} from "react";
import {Dialog, DialogContent} from "@mui/material";
import {AddEditPasswordScreen} from "../../screens/AddEditPasswordScreen";

function Dashboard() {
    const [openModal, setOpenModal] = useState(false);

    const handleOpenModal = () => {
        setOpenModal(true);
    };

    const handleCloseModal = () => {
        setOpenModal(false);
    };


    return (
        <>
            <div>
                <Search />
                <Button type={"button"} icon={<AddIcon sx={{fontSize: 20}}/>} name={"Add"} onClick={handleOpenModal}/>
                <Button type={"button"} icon={""} name={"??"} onClick={handleOpenModal}/>
                <Cards/>
                <Dialog open={openModal} onClose={handleCloseModal}>
                    <DialogContent>
                        <AddEditPasswordScreen handleCloseModal={handleCloseModal}/>
                    </DialogContent>
                </Dialog>
            </div>
        </>
    );
}

export {Dashboard}