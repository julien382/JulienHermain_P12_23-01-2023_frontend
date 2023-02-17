import './Name.css'

const Name = ({userData}) => {

    return (
        <div className='name'>
            <div className='row'>
                <h1 className='textHello'>Bonjour</h1>
                <h1 className='textHello textName'>{userData.firstName}</h1>
            </div>
            <h2 className='congrates'>Félicitation ! Vous avez explosé vos objectifs hier 👏</h2>
            
        </div>
    )
}

export default Name