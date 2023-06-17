import { useState } from "react";
import Axios from "axios";
import { Link, useNavigate  } from "react-router-dom";
import Timer from "../utils/messageTimeout";
import { setCookie, getCookie } from "../utils/cookieUtils";

const Signup = () =>{
    const navigate = useNavigate();
    const url ="http://localhost:3500/";
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [message, setMessage] = useState('')
    const guestUsername = "WiMt6FagfShTkTobAs76x9zCwgQ7MOid"
    const guestPassword = "hdUCnPLZ4oBGPhFy7Wz6DalGpJZhhJhL"
    const handleSignup = async() =>{
        try {
            const response = await Axios.post(`${url}auth/signup`,  {username: username, password: guestPassword})
            const {message} = response.data;
            setMessage(message)
        } catch (error) {
            setMessage(error.response.data.message)
        }
    }
    const handleGuestSignin = async() =>{
        try {
            const response = await Axios.post(`${url}auth/signin`,{username:guestUsername,password: guestPassword})
            const {message, token} = response.data;
            setMessage(message);
            setCookie("token", token, 1)
            navigate("/quote-generator");
        } catch (error) {
            setMessage(error.response.data.message)
        }
    }
    return (
        <>
            <div>
                <h2>Sign up</h2>
                <input 
                type="text" 
                placeholder="username"
                value= {username}
                onChange={(e) => setUsername(e.target.value)}
                />
                <input 
                type="password" 
                placeholder="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
                <button onClick={handleSignup}>Sign up</button>
                <button onClick={handleGuestSignin}>Signin with guest account</button>
                <Link to = "/signin">sign in</Link>
            </div>
            {message && (
                <>
                <p>{message}</p>
                <Timer message={message} setMessage={setMessage} />
                </>
           )}
        </>
    )
}

export default Signup