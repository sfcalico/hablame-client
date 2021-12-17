import axios from 'axios';
import { Link } from 'react-router-dom';
import { useContext, useState } from "react";
import { VisitorContext } from "../context/VisitorContext";

const Signup = () => {
    
    const { emailState, nameState, passwordState } = useContext(VisitorContext);
    // const [ setVisitor ] = visitorState;
    const [ name, setName ] = nameState;
    const [ email, setEmail ] = emailState;
    const [ password, setPassword ] = passwordState;
    const [ emailError, setEmailError ] = useState();

    const submitForm = (e) => {
        e.preventDefault();
        axios.post(`http://localhost:3001/users`, { name, email, password})
            .then((response) => {
                console.log(response);
                localStorage.setItem('userId', response.data.user.id);
                setName(response.data.user.name);
            })
            .catch((error) => {
                setEmailError(error.message);
                console.log(emailError);
            })
    }

    return (
        <div>
            <h3 className="welcomeMsg">Welcome to Háblame, a resource for beginner to intermediate students of Spanish.</h3>
            <h5 className="intro">In addition to serving as an online English-Spanish dictionary, which doesn't make us special, we have integrated an API from Linguatools that looks up collocations - that's to say: idiomatic expressions - in Spanish. Maybe the translation you get from the dictionary is a little ambiguous, as often may be the case. Look up that word in the collocation database and get back phrases the word is used in and example sentences for full context. We hope you find this of use!</h5>

            <form onSubmit={submitForm} className="suli-form" >
                <div>
                    <label htmlFor="name">Name: </label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="email">Email: </label>
                    <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="password">Password: </label>
                    <input value={password} type="password" onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div>
                    {/* <Link to="/home"> */}
                        <input
                            type="submit" 
                            value="sign up!" 
                            className="suli-button"
                        />
                    {/* </Link> */}
                </div>
            </form>
        </div>
    )
}

export default Signup;