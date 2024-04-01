import {Link} from 'react-router-dom'
import './style.css'
const Header = () => {
    return (
        <div className="header-wrapper">
            <div className='set-header'>
                <h1>Web Page</h1>
                <ul className="header-list">
                    <li className="header-list-item">
                        <Link className="nav-link" to='/'>Home</Link>
                    </li>
                    <li className="header-list-item">
                        <Link className="nav-link" to='/About'>About</Link>
                    </li>
                    <li className="header-list-item">
                        <Link className="nav-link" to='/Contact'>Contact</Link>
                    </li>
                
                </ul>
            </div>
        </div>
    )
}
export default Header