import './Performance.css'
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis} from 'recharts';


const Performance = ({dataPerformance}) => {
    const data = dataPerformance.map((item) => {
        return item
    })

    console.log(data);

    return (
        <div className='performance'>
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis />
          <Radar name="Mike" dataKey="value" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
        </RadarChart>
            
        </div>
    )
}

export default Performance