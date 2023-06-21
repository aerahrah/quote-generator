import { useState, useEffect } from "react";
import Axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { setCookie, getCookie } from "../utils/cookieUtils";
import AuthWrapper from "./authwrapper";

const Signin = () =>{
    const navigate = useNavigate();
    const url ="http://localhost:3500/";
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [message, setMessage] = useState('')

    const handleSignin = async() =>{
        try {
            const response = await Axios.post(`${url}auth/signin`, {username: username, password: password})
            const {message, token} = response.data;
            setMessage(message);
            setCookie("token", token, 1)
            navigate("/quote-generator");
        } catch (error) {
            console.log(error.response.data.message);
        }
    }
    return (<>
    <AuthWrapper>
        <div className="flex flex-col bg-gray-800 px-10 py-12 rounded-lg shadow-xl">
            <h1 className="text-4xl uppercase mb-6 font-semibold">Sign In</h1>
            <input 
            className="input-box my-3 focus:border-blue-500 focus:border-2"
            type="text" 
            value={username}
            placeholder="username"
            onChange={(e)=>setUsername(e.target.value)}
            />
            <input 
            className="input-box focus:border-blue-500 focus:border-2 mb-6"
            type="password" 
            value={password}
            placeholder="password"
            onChange={(e)=>setPassword(e.target.value)}
            />
            <button className="btn bg-green-500" onClick={handleSignin}>Sign in</button>
            <Link className="text-gray-500" to = "/">Sign up</Link>
        </div>
        {message && <p>{message}</p>}
    </AuthWrapper>
    </>)
}
export default Signin