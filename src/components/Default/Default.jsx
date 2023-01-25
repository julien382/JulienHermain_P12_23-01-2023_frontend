import './Default.css'
import {Link} from "react-router-dom"

const Default = () => {
    return (
        <div className='default'>
            <Link to="/user/12">Karl </Link>
            <Link to="/user/18">Cécilia </Link>
        </div>
    )
}

export default Default