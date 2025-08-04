import react,{useContext} from "react";
import { Navigate } from "react-router-dom";
import UserContext from "./UserContext";

function AuthRoute({children}){
    const {user} = useContext(UserContext); 
    if(user){
        return <Navigate to="/"/>
    }
    return children;
}


export default AuthRoute;