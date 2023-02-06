import './Performance.css'
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer} from 'recharts';


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
            <RadarChart cx="50%" cy="50%" outerRadius="70%" data={userData}>
              <PolarGrid 
                radialLines={false}
              />
              <PolarAngleAxis 
                dataKey="subject" 
                tick={{
                  fill: 'white',
                  fontSize: 12,
                }}
              />
              <Radar 
                dataKey="value" 
                stroke="#FF0101" 
                fill="#FF0101" 
                fillOpacity={0.7} 
              />
            </RadarChart>
          </ResponsiveContainer>
        </div>
    )
}

export default Performance
