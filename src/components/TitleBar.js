import { Link } from 'react-router-dom';

const TitleBar = (props) => {
    return (
        <nav>
            <span>Háblame</span>
            <span>en español!</span>
            <ul>
                <li className='titleLink'>
                    <Link to="/signup">Sign up</Link>
                </li>
                <li className='titleLink'>
                    <Link to="/login">Log in</Link>
                </li>
                <li className='titleLink'>
                    <Link to="/logout">Log out</Link>
                </li>
            </ul>
        </nav>
    )
}

export default TitleBar;