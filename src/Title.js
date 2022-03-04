import './Title.css';
import { NavLink } from 'react-router-dom'

function Title() {
    return(
        <div>
            <header className='Title'>
                <h1>Disneyland</h1>
                <div className='Title-Subtitle'>Welcome to The Happiest Place on Earth!</div>
                <div>
                <NavLink 
                    className={({ isActive }) => isActive ? "nav-link-active" : "nav-link" }
                    to="/">Home</NavLink>
                <NavLink 
                    className={({ isActive }) => isActive ? "nav-link-active" : "nav-link" }
                    to="/attraction">Attraction</NavLink>
            </div>
            </header>
        </div>
    )
}

export default Title