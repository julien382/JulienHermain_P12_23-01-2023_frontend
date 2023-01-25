import { useEffect, useState } from 'react'
import './Home.css'
import { getUser } from '../../utils/fetch.js';
import { useNavigate, useParams } from 'react-router-dom';

const Home = () => {

    const navigate = useNavigate();

    const [user, setUser] = useState(null)
    const {id} = useParams()

    useEffect(() => {
      const fetchData = async () => {
        const data = await getUser(id)
        setUser(data)
        if (data === undefined) {
            // redirect error
            navigate("/")
        }
        console.log(data);
  
      }
      fetchData()
        
    }, [id, navigate])
    console.log(user);

    if (user) {
        return (
            <div className='home'>
                {user.userInfos.firstName}

            </div>
        )
    }
    else{
        return null
    }


}

export default Home