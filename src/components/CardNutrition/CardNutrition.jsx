import './CardNutrition.css'
import PropTypes from 'prop-types'


const cardNutrition = ({containerLogo, logo, nutritionValue, nutritionType}) => {


// split numbers and letters
const [formattedNumber, unit] = nutritionValue.match(/^(\d+)(.*)$/).slice(1);

// add ,
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

cardNutrition.propTypes = {
    containerLogo: PropTypes.string,
    logo: PropTypes.string,
    nutritionValue: PropTypes.string,
    nutritionType: PropTypes.string
}

export default cardNutrition