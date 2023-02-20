import './Sessions.css'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer} from 'recharts';
import propTypes from 'prop-types'

const Sessions = ({dataSessions}) => {
    const weekdays = ['L ', 'M ', 'M ', 'J ', 'V ', 'S ', 'D ']
    const data = dataSessions.map((item) => {
        return { ...item, day: weekdays[item.day - 1] }
    })


    return (
        <div className='sessions'>
            <h4>Durée moyenne des sessions</h4> 
            <ResponsiveContainer width="100%" height={"100%"}>
                <LineChart
                    width={258}
                    height={263}
                    data={data}
                >
                <CartesianGrid 
                    vertical={false} 
                    horizontal={false} 
                />
                <XAxis 
                    dataKey="day"
                    tick={{ fill: 'white', opacity: '.5' }}
                    tickLine={false}
                    interval="preserveStartEnd"
                    axisLine={false}
                />
                <YAxis 
                    hide={true} 
                    domain={['dataMin-20', 'dataMax+40']}
                />
                <Tooltip
                    offset={21}
                    itemStyle={{
                        color: 'black',
                        fontSize: 10,
                    }}
                    formatter={(value, unit) => [ value + " " + unit]}
                    labelStyle={{ display: 'none' }}
                    cursor={{
                        stroke: 'black',
                        strokeOpacity: 0.1,
                        strokeWidth: 25
                    }}
                />
                <Line 
                    type="natural" 
                    name="min" 
                    dataKey="sessionLength" 
                    stroke="white"
                    strokeWidth={2}
                    dot={false}
                    activeDot={{
                        fill: 'white',
                        strokeOpacity: '.3',
                        strokeWidth: '7',
                        r: 5,
                    }}
                />
                </LineChart>
            </ResponsiveContainer>
            
        </div>
    )
}


Sessions.propTypes = {
    dataSessions: propTypes.arrayOf(
        propTypes.shape({
        day: propTypes.number.isRequired,
        sessionLength: propTypes.number.isRequired
      })
    ).isRequired
  };

export default Sessions
