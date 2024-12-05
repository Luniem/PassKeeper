import {Cards} from "./Cards";
import {Button} from "../reuse/Button";

function Dashboard() {
    const handleClick = () => {
        console.log('Button was clicked!');
    };
    return (
        <>
            <div>
                <Button icon={""} name={"Add"} onClick={handleClick}/>
                <Button icon={""} name={"Share"} onClick={handleClick}/>
                <Cards/>
            </div>
        </>
    );
}

export {Dashboard}