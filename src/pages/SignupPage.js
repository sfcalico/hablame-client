import axios from 'axios';
import env from 'react-dotenv';
import { useContext, useState } from "react";
import { VisitorContext } from "../context/VisitorContext";

const Signup = () => {
    
    // user info
    const { userState, emailState, nameState, passwordState } = useContext(VisitorContext);
    const [ , setUser ] = userState;
    const [ name, setName ] = nameState;
    const [ email, setEmail ] = emailState;
    const [ password, setPassword ] = passwordState;
    const [ emailError, setEmailError ] = useState();

    // call to local database to sign up user/add user to database
    const submitForm = async (e) => {
        e.preventDefault();
        try {
            let response = await axios.post(`${env.REACT_APP_BACKEND_URL}/users/signup`, { name, email, password})
            console.log(response);
            localStorage.setItem('userId', response.data.newUser.id);
            setName(response.data.newUser.name);
            setUser(response.data.newUser);
        } catch (error) {
            setEmailError(error);
            console.log(emailError);
        }
    }


    return (
        <div>
            <h3>Welcome to Háblame, a resource for beginner to intermediate students of Spanish.</h3>
            <h4 className='welcome-msg'>In addition to serving as an online English-Spanish dictionary, which doesn't make us special, we have integrated an API from Linguatools that looks up collocations - that's to say: idiomatic expressions - in Spanish. Maybe the translation you get from the dictionary is a little ambiguous, as often may be the case. Look up that word in the collocation database and get back phrases the word is used in and example sentences for full context. We hope you find this of use!</h4>

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
                    <button
                        disabled={!email||!password||!name}
                        type="submit" 
                        className="suli-button">
                        Sign up!
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Signup;