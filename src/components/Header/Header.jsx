import './Header.css'
import logo from "../../assets/logo.svg"
import NavBar from '../NavBar/NavBar'
import { Link } from 'react-router-dom'

const Header = () => {

    return (
        <header className='header'>
            <Link to="/">
                <img src={logo} alt='logo' className='logo' />
            </Link>
            <NavBar />
            
        </header>
    )
}

export default Header