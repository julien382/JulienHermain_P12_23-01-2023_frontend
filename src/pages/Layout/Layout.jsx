import './Layout.css'

import Header from '../../components/Header/Header';
import SideBar from '../../components/SideBar/SideBar';

const Layout = ({children}) => {

    return (
        <div className='layout'>
            <Header />
            <div className='row'>
                <SideBar />
                {children}
            </div>
        </div>
    )
}

export default Layout