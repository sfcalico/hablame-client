
import { Link } from 'react-router-dom';

const NavBar = (props) => {
    return (
        <nav>
            <ul>
                <li> Welcome back, {use.name}!</li>
                    <hr />
                <li className='navLink'>
                    <Link to="/collocations">Collocations</Link>
                </li>
                    <hr />
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