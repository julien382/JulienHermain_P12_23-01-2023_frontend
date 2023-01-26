import './Sessions.css'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const Sessions = ({dataSessions}) => {
    const weekdays = ['L ', 'M ', 'M ', 'J ', 'V ', 'S ', 'D ']
    const data = dataSessions.map((item) => {
        return { ...item, day: weekdays[item.day - 1] }
    })

    return (
        <div className='sessions'>
            <h4>Durée moyenne des sessions</h4> 
            <LineChart
                width={258}
                height={263}
                data={data.day}
            >
                <CartesianGrid  vertical={false} horizontal={false} />
                <XAxis 
                 dataKey="day"
                 tick={{ fill: 'white', opacity: '.7' }}
                 tickLine={false}
                 tickMargin={5}
                 interval="preserveStartEnd"
                 axisLine={false}/>
                <YAxis 
                 hide={true} domain={['dataMin-20', 'dataMax+40']}/>
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey={data.sessionLength} stroke="#8884d8" activeDot={{ r: 8 }} />
            </LineChart>
            
        </div>
    )
}

export default Sessions