import axios from 'axios';
import { useContext, useState } from "react";
import { VisitorContext } from "../context/VisitorContext";

const Signup = () => {
    
    const { visitorState, emailState } = useContext(VisitorContext);
    const [ setVisitor ] = visitorState;
    const [ email, setEmail ] = emailState;
    const [ password, setPassword ] = useState();
    const [ emailError, setEmailError ] = useState();

    const submitForm = (e) => {
        e.preventDefault();
        axios.post(`http://localhost:3001/users`, { email, password})
            .then((response) => {
                console.log(response);
                localStorage.setItem('userId', response.data.user.id);
                setVisitor(response.data.user);
            })
            .catch((error) => {
                setEmailError(error.message);
                console.log(emailError);
            })
    }

    return (
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
                <input type="submit" value="sign up!" className="suli-button"/>
            </div>
        </form>
    )
}

export default Signup;