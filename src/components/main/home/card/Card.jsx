import {Link} from 'react-router-dom'
import './card.css'

const Card = ({ id, name, image, desc }) => {

    return (
        <div id={id} className={id === '4005-1699' ? 'batmancard' : 'card'}>
            <div className='cardtext'>
                <h2>{name}</h2>
                <p>{desc}</p>
                <Link to={`/character/${id}`}>
                    <button className='cardbutton'>
                        Learn More
                    </button>
                </Link>
            </div>
            <img src={image} alt={name}/>
        </div>
    )
}

export default Card;