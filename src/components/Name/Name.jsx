import './Name.css'
import propTypes from 'prop-types'

const Name = ({userName}) => {

    return (
        <div className='name'>
            <div className='row'>
                <h1 className='textHello'>Bonjour</h1>
                <h1 className='textHello textName'>{userName}</h1>
            </div>
            <h2 className='congrates'>Félicitation ! Vous avez explosé vos objectifs hier 👏</h2>
            
        </div>
    )
}

Name.propTypes = {
    userName: propTypes.string.isRequired,
  };

export default Name