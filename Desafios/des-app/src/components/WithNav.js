import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

function WithNav() {
    return(
        <div>
            <NavBar></NavBar>
            <Outlet></Outlet>
        </div>
    )
}

export default WithNav;