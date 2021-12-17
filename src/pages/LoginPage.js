import axios from 'axios';
import { Link } from 'react-router-dom';
import { useContext, useState } from "react";
import { VisitorContext } from "../context/VisitorContext";

const Login = () => {

    const { visitorState, emailState, passwordState } = useContext(VisitorContext);
    const [ setVisitor ] = visitorState;
    const [ email, setEmail ] = emailState;
    const [ password, setPassword ] = passwordState;
    const [ emailError, setEmailError ] = useState();

    const submitForm = (e) => {
        e.preventDefault();
        axios.post(`https://git.heroku.com/habla-me-api.git/users`,  { email, password })
            .then((response) => {
                console.log(response);
                localStorage.setItem('userId', response.data.user.id)
                setVisitor(response.data.user)
            })
            .catch((error) => {
                setEmailError(error.message);
                console.log(emailError);
            })
    }

    return (

        <>
            <h2>Welcome Back!</h2>
            <form onSubmit={submitForm} className="suli-form" >
                <div>
                    <label htmlFor="email">Email:</label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} />
                    
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input value={password} type="password" onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div>
                    <input type="submit" value="Log In!" className="suli-button"><Link to="/home" /></input>
                </div>
            </form>
        </>
    )

}

export default Login;