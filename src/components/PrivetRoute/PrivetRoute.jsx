import { Navigate } from "react-router-dom";
import { isMAni } from "./isMani";
import NotFound from "../../pages/NotFound/NotFound";

export default function PrivateRoute({children}) {
    

    return(
        <>
            {
                isMAni() ? children : <NotFound/>
            }
        </>
    )
}