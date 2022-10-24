import React from 'react';
import './Maine.scss';

const Maine = (props) => {

    const {setCenter, setZoom} = props;

    React.useEffect(() => {
        setCenter({
            lat: 45.367584,
            lng: -68.972168
        })
        setZoom(6);
    }, [setCenter, setZoom]);

    return (
        <div className='me_addresses'>
            <h2>Maine</h2>
            <h4>Portland</h4>
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

export default Maine;