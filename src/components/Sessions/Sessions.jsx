import './Sessions.css'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';


const Sessions = ({dataSessions}) => {
    const weekdays = ['L ', 'M ', 'M ', 'J ', 'V ', 'S ', 'D ']
    const data = dataSessions.map((item) => {
        return { ...item, day: weekdays[item.day - 1] }
    })

    console.log(data);

    return (
        <div className='sessions'>
            <h4>Durée moyenne des sessions</h4> 
            <LineChart
                width={258}
                height={263}
                data={data}
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
            <Tooltip
                offset={21}
                itemStyle={{
                fontSize: 10,
                }}
                formatter={(value, unit) => [ unit, value]}
                labelStyle={{ display: 'none' }}
                contentStyle={{
                }}
            />
            <Legend />
            <Line type="monotone" name="min" dataKey="sessionLength" stroke="white" />
            </LineChart>
            
        </div>
    )
}

export default Sessions