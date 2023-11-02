import { createContext, useState, useEffect } from "react";
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { pushNotify } from "../jsx/components/pushNotify";


export const UserContext = createContext();
export const Axios = axios.create({ baseURL: 'http://localhost/siyabrands' });


export const AxiosPost = async (apiname, body) => {
    const { data } = await Axios.post(apiname, body)
    console.log(data);
    return data;
}

export const AxiosGet = async (apiname) => {
    const { data } = await Axios.get(apiname);
    console.log(data)
    return data;
}


export const UserContextProvider = ({ children }) => {
    const [categoryFilter,setCategoryFilter] = useState("All Products")
    const [searchFilter,setSearchFilter] = useState("")
    const [theUser, setUser] = useState(null);
    const [wait, setWait] = useState(false);
    const [curPath, setCurPath] = useState('')
    const history = useHistory();

    const loginUser = async ({ username, password }) => {
        setWait(true);
        try {
            const {data} = await Axios.post('login.php', { username:username, password:password });
            console.log(data);
            if (data.success && data.token) {
                localStorage.setItem('loginToken', data.token);
                localStorage.setItem('username', data.username);
                localStorage.setItem('privilege', data.privilege)
                await loggedInCheck();
                history.push('/');
                window.location.reload(true)
                setWait(false);
                return { Success: true };
            }
            setWait(false);
            if (data.accounts) {
                return { success: false, message: data.message, accounts: data.accounts }
            }
            return { success: false, message: data.message };
        } catch (err) {
            setWait(false);
            return { success: false, message: 'Server Error!' };
        }
    }
    const loggedInCheck = async () => {
        const loginToken = localStorage.getItem('loginToken');
        Axios.defaults.headers.common['Authorization'] = 'Bearer ' + loginToken;
        if (loginToken) {
            try{
                const { data } = await Axios.get('getUser.php');
                console.log(data)
                if (data.success) {
                    setUser(localStorage.getItem('username'));
                    return ;
                }
                setUser(null);
            }catch{
                
            }
        }
    }
    useEffect(() => {
        async function asyncCall() {
            await loggedInCheck();
        }
        asyncCall();
    }, []);

    const logout = () => {
        localStorage.clear();
        setUser(null);
    }

    return (
        <UserContext.Provider value={{ loginUser, wait, user: theUser, loggedInCheck, logout, curPath, setCurPath ,categoryFilter,setCategoryFilter,searchFilter,setSearchFilter}}>
            {children}
        </UserContext.Provider>
    );
}
export default UserContextProvider;