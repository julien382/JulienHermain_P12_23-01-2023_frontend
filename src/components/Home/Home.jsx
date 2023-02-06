import { useEffect, useState } from 'react'
import './Home.css'
import calories from "../../assets/calories.svg"
import proteines from "../../assets/proteines.svg"
import glucides from "../../assets/glucides.svg"
import lipides from "../../assets/lipides.svg"
import { getSessions, getActivity, getUser, getPerformance } from '../../utils/fetch.js';
import { useNavigate, useParams } from 'react-router-dom';
import Name from '../Name/Name';
import Sessions from '../Sessions/Sessions'
import Activity from '../Activity/Activity'
import Performance from '../Performance/Performance'
import CardNutrition from '../CardNutrition/CardNutrition';
import Score from '../Score/Score'


const Home = () => {
  
  const navigate = useNavigate();
  
  const [userMainData, setUserMainData] = useState(null)
  const [activities, setActivities] = useState(null)
  const [sessions, setSessions] = useState(null)
  const [performance, setPerformance] = useState(null)
  const {id} = useParams()

  useEffect(() => {
    const fetchData = async () => {
      const data = await getUser(id)
      setUserMainData(data)
      // redirect error
      if (data === undefined) {
          navigate("/")
      }

    }
    fetchData()
      
  }, [id, navigate])


  useEffect(() => {
    const fetchData = async () => {
      const data = await getActivity(id)
      setActivities(data)
    }
    fetchData()
      
  }, [id])


  useEffect(() => {
    const fetchData = async () => {
      const data = await getSessions(id)
      setSessions(data)

    }
    fetchData()
      
  }, [id])


  useEffect(() => {
    const fetchData = async () => {
      const data = await getPerformance(id)
      setPerformance(data)

    }
    fetchData()
      
  }, [id])

  
  if (userMainData && activities && sessions && performance) {
      return (
          <div className='home'>
            <Name name={userMainData.userInfos.firstName} />
            <div className='row'>
              {/* Graphs */}
              <div>
                <Activity dataActivity={activities}/>
                <div className='row'>
                  <Sessions dataSessions={sessions.sessions}/>
                  <Performance dataPerformance={performance.data} kindPerformance={performance.kind}/>
                  <Score dataScore={userMainData} />
                </div>

              </div>
              {/* Cards Nutrition */}
              <div>
                <CardNutrition containerLogo={"caloriesLogo"} logo={calories} nutritionValue={userMainData.keyData.calorieCount + "kCal"} nutritionType={"Calories"} />
                <CardNutrition containerLogo={"proteinesLogo"} logo={proteines} nutritionValue={userMainData.keyData.proteinCount + "g"} nutritionType={"Proteines"}  />
                <CardNutrition containerLogo={"glucidesLogo"} logo={glucides} nutritionValue={userMainData.keyData.carbohydrateCount + "g"} nutritionType={"Glucides"}  />
                <CardNutrition containerLogo={"lipidesLogo"} logo={lipides} nutritionValue={userMainData.keyData.lipidCount + "g"} nutritionType={"Lipides"}  />
              </div>
              
            </div>

          </div>
      )
  }
  else{
      return null
  }

}

export default Home