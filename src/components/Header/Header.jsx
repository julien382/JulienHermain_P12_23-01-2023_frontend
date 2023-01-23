import './Header.css'
import logo from "../../assets/logo.svg"
import NavBar from '../NavBar/NavBar'

const Header = () => {
    return (
        <header className='header'>
            <img src={logo} alt='logo' className='logo' />
            <NavBar />
        </header>
    )
}

export default Header