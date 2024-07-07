export default function Card(props) {
    return (
        <div className='card-container'>
            <img className='card-img' src={props.imageUrl} />
            <div className='card-content'>
                <div className='location-info'>
                    <img src='../../../public/marker.svg' className='marker-img'/>
                    <p className='country'>{props.location.toUpperCase()}</p>
                    <a className='maps-link' target='_blank' href={props.mapsLink}>
                        View on Google Maps
                    </a>
                </div>
                <h2 className='card-title'>{props.title}</h2>
                <p className='dates'>{props.startDate} - {props.endDate}</p>
                <p className='description'>{props.description}</p>
            </div>
        </div>
    )
}