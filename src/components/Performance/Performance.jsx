import './Performance.css'
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer} from 'recharts';


const Performance = ({dataPerformance, kindPerformance}) => {

    const userData = dataPerformance.map(item => {
        return {
          subject: kindPerformance[item.kind],
          value: item.value,
        };
      });

    return (
        <div className='performance'>
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={userData}>
              <PolarGrid />
              <PolarAngleAxis dataKey="subject" />
              <PolarRadiusAxis />
              <Radar name="performance" dataKey="value" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
            </RadarChart>
          </ResponsiveContainer>
        </div>
    )
}

export default Performance
