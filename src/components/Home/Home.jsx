import { useEffect, useState } from 'react'
import './Home.css'
import { getUser } from '../../utils/fetch.js';
import { getActivity } from '../../utils/fetch.js';
import { useNavigate, useParams } from 'react-router-dom';
import Name from '../Name/Name';
import CardNutrition from '../CardNutrition/CardNutrition';

import calories from "../../assets/calories.svg"
import proteines from "../../assets/proteines.svg"
import glucides from "../../assets/glucides.svg"
import lipides from "../../assets/lipides.svg"

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
                <Name name={user.userInfos.firstName} />
                <CardNutrition containerLogo={"caloriesLogo"} logo={calories} nutritionValue={1 + "kCal"} nutritionType={"Calories"} />
                <CardNutrition containerLogo={"proteinesLogo"} logo={proteines} nutritionValue={2 + "g"} nutritionType={"Proteines"}  />
                <CardNutrition containerLogo={"glucidesLogo"} logo={glucides} nutritionValue={3 + "g"} nutritionType={"Glucides"}  />
                <CardNutrition containerLogo={"lipidesLogo"} logo={lipides} nutritionValue={4 + "g"} nutritionType={"Lipides"}  />
                {/*graph*/}
                {/*component*/}{activity.userId}


            </div>
        )
    }
    else{
        return null
    }

}

export default Home