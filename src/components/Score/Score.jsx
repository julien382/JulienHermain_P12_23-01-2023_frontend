import './Score.css'
import { RadialBarChart, RadialBar, ResponsiveContainer} from 'recharts';


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



    console.log(dataScore)
      
    return (
        <div className='score'>
            <div className="label">
                <h4>Score</h4> 
                <p>{dataScore.todayScore * 100}%</p>
            </div>
            <ResponsiveContainer width="100%" height="100%">
                <RadialBarChart innerRadius="70%" outerRadius="80%" barSize={10} data={userData}>
                    <RadialBar
                    
                        clockWise
                        dataKey="value"
                    />
                    <h4 className=''>toto</h4>
                </RadialBarChart>
            </ResponsiveContainer>
            
        </div>
    )
}

export default Score