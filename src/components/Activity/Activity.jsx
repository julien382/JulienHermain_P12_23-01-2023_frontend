import './Activity.css'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';


const Activity = ({dataActivity}) => {
    const data = dataActivity.map((item) => {
        return { ...item, day: item.day.split('')[9] }
    })

    return (
        <div className='activity'>
            <h4>Activité quotidienne</h4> 
            <BarChart
                width={835}
                height={320}
                data={data}
            >
            <CartesianGrid 
                strokeDasharray="3" 
                vertical={false}
            />
            <XAxis 
                dataKey="day"
                tick={{ fill: '#9B9EAC', fontSize: '14'}} 
                tickLine={false}
                tickSize={16}
                stroke="#DEDEDE"
            />
            <YAxis 
                stroke="#9B9EAC"
                orientation="right"
                axisLine={false}
                tickLine={false}
                tick={{ fill: '#9B9EAC', fontSize: '14'}}
            />
            <Tooltip
                offset={21}
                itemStyle={{
                color: 'white',
                fontSize: 10,
                }}
                formatter={(value, unit) => [value, unit]}
                labelStyle={{ display: 'none' }}
                contentStyle={{
                backgroundColor: '#E60000',
                }}
            />
            <Legend 
                verticalAlign='top' 
                align='right'
                iconType="circle"
                iconSize={8}
                height={70}
            />
            <Bar 
                barSize={7} 
                radius={[10, 10, 0, 0]} 
                unit="kg" 
                name="Poids (kg)" 
                dataKey="kilogram" 
                fill="#282D30" 
            />
            <Bar 
                barSize={7} 
                radius={[10, 10, 0, 0]} 
                unit="Kcal"  
                name="Calories brûlées (kCal)" 
                dataKey="calories" 
                fill="#E60000" 
            />
        </BarChart>
            
        </div>
    )
}

export default Activity