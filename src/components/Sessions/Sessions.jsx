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
            <ResponsiveContainer width="100%" height="100%">
            <LineChart
                width={500}
                height={300}
                data={data.day}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey={data.sessionLength} stroke="#8884d8" activeDot={{ r: 8 }} />
            </LineChart>
        </ResponsiveContainer>
            
        </div>
    )
}

export default Sessions