import { VisitorContext } from "../context/VisitorContext";
import { useContext, useState } from "react";
import axios from 'axios';

const Login = () => {

    const { userState, nameState, emailState, passwordState } = useContext(VisitorContext);
    const [ user, setUser ] = userState;
    const [ name, setName ] = nameState;
    const [ email, setEmail ] = emailState;
    const [ password, setPassword ] = passwordState;
    const [ emailError, setEmailError ] = useState();

    const submitForm = async (e) => {
        e.preventDefault();
        try {
            let response = await axios.post(`http://localhost:3001/users/login`,  { email, password })
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