import { useEffect, useState } from 'react'
import './Home.css'
import calories from "../../assets/calories.svg"
import proteines from "../../assets/proteines.svg"
import glucides from "../../assets/glucides.svg"
import lipides from "../../assets/lipides.svg"
import { getSessions, getActivity, getUser } from '../../utils/fetch.js';
import { useNavigate, useParams } from 'react-router-dom';
import Name from '../Name/Name';
import Sessions from '../Sessions/Sessions'
import CardNutrition from '../CardNutrition/CardNutrition';


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


    const [activity, setActivity] = useState(null)

    useEffect(() => {
      const fetchData = async () => {
        const data = await getActivity(id)
        setActivity(data)

        console.log(data);
  
      }
      fetchData()
        
    }, [id])

    const [sessions, setSessions] = useState(null)

    useEffect(() => {
      const fetchData = async () => {
        const data = await getSessions(id)
        setSessions(data)

        console.log(data);
  
      }
      fetchData()
        
    }, [id])

    if (user && activity && sessions) {
        return (
            <div className='home'>
                <Name name={user.userInfos.firstName} />
                <div className='row'>
                  <Sessions dataSessions={sessions.sessions}/>
                  <div>
                    <CardNutrition containerLogo={"caloriesLogo"} logo={calories} nutritionValue={user.keyData.calorieCount + "kCal"} nutritionType={"Calories"} />
                    <CardNutrition containerLogo={"proteinesLogo"} logo={proteines} nutritionValue={user.keyData.proteinCount + "g"} nutritionType={"Proteines"}  />
                    <CardNutrition containerLogo={"glucidesLogo"} logo={glucides} nutritionValue={user.keyData.carbohydrateCount + "g"} nutritionType={"Glucides"}  />
                    <CardNutrition containerLogo={"lipidesLogo"} logo={lipides} nutritionValue={user.keyData.lipidCount + "g"} nutritionType={"Lipides"}  />
                  </div>
                  
                </div>
                {/*graph*/}
                {/*component{activity.userId}*/}


            </div>
        )
    }
    else{
        return null
    }

}

export default Home