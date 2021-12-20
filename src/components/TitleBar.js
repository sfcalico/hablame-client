import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { VisitorContext } from '../context/VisitorContext';

const TitleBar = () => {

    const { userState, nameState, emailState, passwordState } = useContext(VisitorContext);
    const [ user, setUser ] = userState;
    const [ name, setName ] = nameState;
    const [ email, setEmail ] = emailState;
    const [ password, setPassword] = passwordState;

    return (
        <nav className='titleBar'>
            <span className='title'>Háblame </span>
            <span className='subtitle'>en español!</span>
            
            <ul className="titleLinks">
                <li>
                    <Link to="/home">home</Link>
                </li>
                <li>
                    <Link to="/signup">sign up</Link>
                </li>
                <li >
                    <Link to="/login">log in</Link>
                </li>
                <li
                    className='logoutBtn'
                    onClick={() => {
                        localStorage.removeItem('userId');
                        setUser({});
                        setName('');
                        setEmail('');
                        setPassword('')
                    }}>
                    log out
                </li>
            </ul>
        </nav>
    )
}

export default TitleBar;