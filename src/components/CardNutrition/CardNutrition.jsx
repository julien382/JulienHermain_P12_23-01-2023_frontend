import './CardNutrition.css'

const cardNutrition = ({logo, nutritionValue, nutritionType}) => {

    return (
        <div className='cardNutrition'>
            <div className='logoCardNutrition'>
                <img src={logo} alt='logo' className='logo' />
            </div>
            <div className='texteCardNutrition'>
                <h3>{nutritionValue}</h3>
                <p>{nutritionType}</p>

            </div>
            
        </div>
    )
}

export default cardNutrition