import React from 'react';
import './NewJersey.scss';

const NewJersey = (props) => {

    const {setCenter, setZoom} = props;

    React.useEffect(() => {
        setCenter({
            lat: 39.833851,
            lng: -74.871826
        })
        setZoom(6);
    }, [setCenter, setZoom]);

    return (
        <div className='nj_addresses'>
            <h2>New Jersey</h2>
            <h4>Expansion City</h4>
            <p>Coming Soon</p>
            <br />
            <h4>Expansion City</h4>
            <p>Coming Soon</p>
            <br />
            <h4>Expansion City</h4>
            <p>Coming Soon</p>
        </div>
    )
}

export default NewJersey;