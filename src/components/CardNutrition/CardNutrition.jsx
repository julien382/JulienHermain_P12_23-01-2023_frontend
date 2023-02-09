import './CardNutrition.css'

const cardNutrition = ({containerLogo, logo, nutritionValue, nutritionType}) => {

// split les chiffres et les lettres
const [formattedNumber, unit] = nutritionValue.match(/^(\d+)(.*)$/).slice(1);

// mettre une virgule
const formattedValue = formattedNumber.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");

// add unit
const goodValueNutrition = formattedValue + unit;

    return (
        <div className='cardNutrition'>
            <div className={`logoCardNutrition ${containerLogo}`}>
                <img src={logo} alt={containerLogo} className="logo"/>
            </div>
            <div className='texteCardNutrition'>
                <h3>{goodValueNutrition}</h3>
                <p>{nutritionType}</p>

            </div>
            
        </div>
    )
}

export default cardNutrition