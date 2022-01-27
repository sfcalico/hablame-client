import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { VisitorContext } from '../context/VisitorContext';

const NavBar = () => {

    const { nameState } = useContext(VisitorContext);
    const [ name ] = nameState;

    return (
        // returns the nav element that appears on the left of all pages when a user is signed in
        <nav className="navBar">
            <ul className='navLinks'>
                <li className='navLink welcome'>¡Bienvenido, {name}!</li>
                    <br />
                <li className='navLink'>
                    <Link to="/collocations">Collocations</Link>
                </li>
                    <br />
                <li className='navLink'>
                    <p>News (coming soon!)</p>
                    {/*<Link to="/news"> News </Link> */}
                </li>
                <li className='navLink'>
                    <p>Resources (coming soon!)</p>
                    {/*<Link to="/resources"> Resources </Link> */}
                </li>
            </ul>
        </nav>
    )
}

export default NavBar;