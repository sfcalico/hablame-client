import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { VisitorContext } from '../context/VisitorContext';

const TitleBar = () => {

    const { visitorState, emailState } = useContext(VisitorContext);
    const [ setVisitor ] = visitorState;
    const [ setEmail ] = emailState;

    return (
        <nav className='titleBar'>
            <span className='title'>Háblame </span>
            <span className='subtitle'>en español!</span>
            
            <ul className="titleLinks">
                <li>
                    <Link to="/home">inicio</Link>
                </li>
                <li>
                    <Link to="/signup">registrar</Link>
                </li>
                <li >
                    <Link to="/login">iniciar sesión</Link>
                </li>
                <li
                    onClick={() => {
                        localStorage.removeItem('userId')
                        setVisitor({})
                        setEmail('')
                    }}>
                    <Link to="/login">cerrar sesión</Link>
                </li>
            </ul>
        </nav>
    )
}

export default TitleBar;