import './CardNutrition.css'

const cardNutrition = ({containerLogo, logo, nutritionValue, nutritionType}) => {

    return (
        <div className='cardNutrition'>
            <div className={`logoCardNutrition ${containerLogo}`}>
                <img src={logo} alt={containerLogo} className="logo"/>
            </div>
            <div className='texteCardNutrition'>
                <h3>{nutritionValue}</h3>
                <p>{nutritionType}</p>

            </div>
            
        </div>
    )
}

export default cardNutrition