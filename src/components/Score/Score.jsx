import './Score.css'
import { RadialBarChart, RadialBar, ResponsiveContainer} from 'recharts';
import propTypes from 'prop-types'


const Score = ({dataScore}) => {
    const userData = [{
        name: "Score",
        value: dataScore.todayScore,
        fill: "#FF0000"
    },
    {
        name: "Score",
        value: "1",
        fill: "rgba(0,0,0,0)"
    }
]

      
    return (
        <div className='score'>
            <h4>Score</h4> 
            <div className="label">
                <h5>{dataScore.todayScore * 100}%</h5>
                <p>de votre objectif</p>
            </div>
            <ResponsiveContainer width="100%" height="100%">
                <RadialBarChart innerRadius="70%" outerRadius="70%" startAngle={90} barSize={10} data={userData}>
                    <RadialBar
                        cornerRadius={5}
                        dataKey="value"
                    />
                    <h4 className=''>toto</h4>
                </RadialBarChart>
            </ResponsiveContainer>
            
        </div>
    )
}

Score.propTypes = {
    dataScore: propTypes.object.isRequired
}

export default Score