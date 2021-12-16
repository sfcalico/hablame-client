import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { VisitorContext } from '../context/VisitorContext';

const NavBar = () => {

    const { nameState } = useContext(VisitorContext);
    const [ name ] = nameState;

    return (
        <nav className="navBar">
            <ul className='navLinks'>
                <li>¡Bienvenido de nuevo, {name}!</li>
                    <br />
                <li className='navLink'>
                    <Link to="/collocations">Collocations</Link>
                </li>
                    <br />
                <li className='navLink'>
                    <Link to="/news">News</Link>
                </li>
                <li className='navLink'>
                    <Link to="/resources">Resources</Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar;