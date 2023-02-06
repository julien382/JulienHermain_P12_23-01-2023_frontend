import './Performance.css'
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis} from 'recharts';


const Performance = ({dataPerformance, kindPerformance}) => {

    console.log(dataPerformance)

    const userData = dataPerformance.map(item => {
        return {
          subject: kindPerformance[item.kind],
          value: item.value,
        };
      });
      console.log(userData)

    return (
        <div className='performance'>
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={userData}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis />
          <Radar name="Mike" dataKey="value" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
        </RadarChart>
            
        </div>
    )
}

export default Performance