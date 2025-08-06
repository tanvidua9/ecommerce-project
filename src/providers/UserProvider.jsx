import react, { useState,useEffect } from "react";
import { UserContext } from "../components/Contexts";
import Loading from "../components/Loading";
import axios from "axios";

function UserProvider({children}){
    const [user,setUser]= useState();
    const [loadingUser,setLoadingUser]= useState(true);

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
        axios.get('https://myeasykart.codeyogi.io/me', {
            headers: {
            Authorization: token
            }
        }).then((response) => {
            setUser(response.data);
            setLoadingUser(false);
        }).catch((error) => {
            localStorage.removeItem("token");
            setLoadingUser(false);
        })
        } else {
        setLoadingUser(false);
        }
    }, [])

    if(loadingUser){
        return <Loading/>;
    }

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    );
}


export default UserProvider;