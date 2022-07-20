import { Outlet } from "react-router-dom";


function WithOutNav() {
    return(
        <div>
            
            <Outlet></Outlet>
        </div>
    )
}

export default WithOutNav;