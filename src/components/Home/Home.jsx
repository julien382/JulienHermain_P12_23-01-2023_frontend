import { useEffect, useState } from 'react'
import './Home.css'
import { getUser } from '../../utils/fetch.js';
import { getActivity } from '../../utils/fetch.js';
import { useNavigate, useParams } from 'react-router-dom';

const Home = () => {

    const navigate = useNavigate();

    const [user, setUser] = useState(null)
    const {id} = useParams()

    useEffect(() => {
      const fetchData = async () => {
        const data = await getUser(id)
        setUser(data)
        // redirect error
        if (data === undefined) {
            navigate("/")
        }
        console.log(data);
  
      }
      fetchData()
        
    }, [id, navigate])
    console.log(user);


    const [activity, setActivity] = useState(null)

    useEffect(() => {
      const fetchData = async () => {
        const data = await getActivity(id)
        setActivity(data)

        console.log(data);
  
      }
      fetchData()
        
    }, [id])
    console.log(activity);

    if (user, activity) {
        return (
            <div className='home'>
                {user.userInfos.firstName}
                {activity.userId}

                {/*graph*/}

            </div>
        )
    }
    else{
        return null
    }

}

export default Home