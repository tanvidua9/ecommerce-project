import react,{useContext} from "react";
import { AlertContext, CartContext, UserContext } from "./Contexts";


function withProvider(provider){
    return function (IncomingComponent){
        function OutgoingComponent(props){
            const contextData= useContext(provider);
            return <IncomingComponent {...props} {...contextData}/>;
        }
        return OutgoingComponent;
    }
}


export default withProvider;
export const withAlert= withProvider(AlertContext);
export const withUser= withProvider(UserContext);
export const withCart= withProvider(CartContext);