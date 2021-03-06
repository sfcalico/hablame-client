import axios from 'axios';
import env from "react-dotenv";
import { useContext, useState } from "react";
import { VisitorContext } from "../context/VisitorContext";

const Login = () => {

    // user info
    const { userState, nameState, emailState, passwordState } = useContext(VisitorContext);
    const [ , setUser ] = userState;
    const [ , setName ] = nameState;
    const [ email, setEmail ] = emailState;
    const [ password, setPassword ] = passwordState;
    const [ emailError, setEmailError ] = useState();

    // call to local databse to sign in existing user
    const submitForm = async (e) => {
        e.preventDefault();
        try {
            let response = await axios.post(`${process.env.REACT_APP_BACKEND_URL}/users/login`,  { email, password })
            console.log(response);
            localStorage.setItem('userId', response.data.user.id);
            setName(response.data.user.name);
            setUser(response.data.user);
        } catch (error) {
            setEmailError(error);
            console.log(emailError);
        }
        
    }

    return (

        <div>
            <h2>Welcome Back!</h2>
            <h3 className="welcomeMsg">We're Háblame, a resource for beginner to intermediate students of Spanish.</h3>

            <form onSubmit={submitForm} className="suli-form" >
                <div>
                    <label htmlFor="email">Email:</label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} />
                    
                </div>
                <div>
                    <label htmlFor="password">Password: </label>
                    <input value={password} type="password" onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div>
                    <button
                        disabled={!email||!password}
                        type="submit"
                        value="Log In!"
                        className="suli-button"> 
                        Log in!
                    </button>
                </div>
            </form>
        </div>
    )

}

export default Login;