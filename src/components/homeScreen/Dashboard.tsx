import {Cards} from "./Cards";
import {Search} from "./Search";
import {useState} from "react";
import {Dialog, DialogContent} from "@mui/material";
import {AddEditPasswordScreen} from "../../screens/AddEditPasswordScreen";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import styles from "../../styles.module.css";

function Dashboard() {
    const [openModal, setOpenModal] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");


    const handleOpenModal = () => {
        setOpenModal(true);
    };

    const handleCloseModal = () => {
        setOpenModal(false);
    };

    const handleSearch = (term: string) => {
        setSearchTerm(term);
    };

    return (
        <>
            <div>
                <Search onSearch={handleSearch} />
                <Cards searchTerm={searchTerm}/>
                <Dialog open={openModal} onClose={handleCloseModal}>
                    <DialogContent>
                        <AddEditPasswordScreen handleCloseModal={handleCloseModal}/>
                    </DialogContent>
                </Dialog>

                <div className={styles.floatingButton}>
                    <Fab color="primary" onClick={handleOpenModal}>
                        <AddIcon/>
                    </Fab>
                </div>
            </div>
        </>
    );
}

export {Dashboard}