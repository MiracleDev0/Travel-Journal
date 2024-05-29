import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'

export default function Places({country, viewmap, place, Image, location, description}) {
    return (
    <div>
            <section className="places">
                <img src={Image} alt={`image of ${place}`} className='image--container'/>
            <div className='well'>
                <div className='subdiv--one'>
                <FontAwesomeIcon icon={faMapMarkerAlt} className='f--a' />
                <p className='country'>{country}</p>
                <span><a href={viewmap}>View on Google Maps</a></span>
                </div>
                <div className='subdiv--two'>
                    <h1>{place}</h1>
                    <h3>{location}</h3>
                    <p className='des'>{description}</p>
                </div>
            </div>
        </section>
        <hr />
    </div>
        
    )
}