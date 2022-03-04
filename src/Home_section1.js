import './Home_section1.css';
import { Link } from 'react-router-dom'

function HomeSection1() {
    return(
        <div className='Home_section1'>
            <img src={`${process.env.PUBLIC_URL}/images/Disney.jpg`} alt={`N/A`} />
            <p>This website introduces users to Disneyland attractions that are currently open and available so that attendees can have the best Disneyland experience!</p>
            <button><Link to= '/attraction' className='forbutton'>EXPLORE</Link></button>
        </div>
    )
}

export default HomeSection1