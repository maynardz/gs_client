import React from 'react';
import './NewMexico.scss';

const NewMexico = (props) => {

    const {setCenter, setZoom} = props;

    React.useEffect(() => {
        setCenter({
            lat: 34.307144,
            lng: -106.018066
        })
        setZoom(6);
    }, [setCenter, setZoom]);

    return (
        <div className='nm_addresses'>
            <h2>New Mexico</h2>
            <h4>Albuquerque</h4>
            <p>Coming Soon</p>
            <br />
            <h4>Sante Fe</h4>
            <p>Coming Soon</p>
            <br />
            <h4>Las Cruces</h4>
            <p>Coming Soon</p>
        </div>
    )
}

export default NewMexico;