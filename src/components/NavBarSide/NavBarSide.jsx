import './NavBarSide.css'
import {NavLink} from "react-router-dom"
import Meditation from "../../assets/meditation.svg"
import Natation from "../../assets/natation.svg"
import Velo from "../../assets/velo.svg"
import Musculation from "../../assets/musculation.svg"

const NavBarSide = () => {
    return (
        <nav className='navBarSide'>
            <ul>
                <li>
                    <NavLink 
                        className={({ isActive }) => (isActive ? 'active' : '')} 
                        to="/Meditation"><img src={Meditation} alt='Meditation' />
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        className={({ isActive }) => (isActive ? 'active' : '')} 
                        to="/Natation"><img src={Natation} alt='Natation' />
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        className={({ isActive }) => (isActive ? 'active' : '')} 
                        to="/Velo"><img src={Velo} alt='Velo' />
                    </NavLink>
                </li>
                <li>
                    <NavLink 
                        className={({ isActive }) => (isActive ? 'active' : '')} 
                        to="/Musculation"><img src={Musculation} alt='Musculation' />
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default NavBarSide