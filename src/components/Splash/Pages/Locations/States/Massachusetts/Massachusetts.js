import React from 'react';
import './Massachusetts.scss';

const Massachusetts = (props) => {

    const {setCenter, setZoom} = props;

    React.useEffect(() => {
        setCenter({
            lat: 42.407211,
            lng: -71.382439
        })
        setZoom(6);
    }, [setCenter, setZoom]);

    return (
        <div className='ma_addresses'>
            <h2>Massachusetts</h2>
            <h4>Cambridge</h4>
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

export default Massachusetts;