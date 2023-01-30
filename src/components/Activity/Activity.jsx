import './Activity.css'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';


const Activity = ({dataActivity}) => {
    const data = dataActivity.map((item) => {
        return item
    })
    console.log(data);

    return (
        <div className='activity'>
            <h4>Activité quotidienne</h4> 
            <BarChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Legend verticalAlign='top' align='right'/>
                <Bar dataKey="kilogram" fill="#8884d8" />
                <Bar dataKey="calories" fill="red" />
            </BarChart>
            
        </div>
    )
}

export default Activity