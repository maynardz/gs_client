import React from 'react';
import './WestVirginia.scss';

// import { Tooltip } from 'antd';

import api_key from '../../../../../helpers/google';

const WestVirginia = (props) => {

    const {setCenter, setZoom} = props;

    React.useEffect(() => {
        setCenter({
            lat: 39.000000,
            lng: -80.500000
        });
        setZoom(6);
    }, [setCenter, setZoom]);

    const fetchCrossLanes = () => {
        fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=125+Lakeview+Dr,+Cross+Lanes,+WV&key=${api_key}`)
            .then(res => res.json())
            .then(json => {
                console.log(json);
                props.setLatLng_values(json.results[0].geometry.location);
                props.setCenter(json.results[0].geometry.location);
                props.setZoom(14);
        });
    }

    const fetchKanawha = () => {
        fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=5126+MacCorkle+Ave+SE,+Charleston,+WV&key=${api_key}`)
            .then(res => res.json())
            .then(json => {
                console.log(json);
                props.setLatLng_values(json.results[0].geometry.location);
                props.setCenter(json.results[0].geometry.location);
                props.setZoom(14);
        });
    }

    const fetchHuntington = () => {
        fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=514+20th+St,+Huntington,+WV&key=${api_key}`)
        .then(res => res.json())
            .then(json => {
                console.log(json);
                props.setLatLng_values(json.results[0].geometry.location);
                props.setCenter(json.results[0].geometry.location);
                props.setZoom(14);
            });
    }
    
    return (
        <div className='wv_addresses'>
            <h2>West Virginia</h2>
            <div className='crossLanes_map_trigger' onClick={() => fetchCrossLanes()}>
                {/* <Tooltip title="view on map"> */}
                    <h4>Cross Lanes</h4>
                    <p>125 Lakeview Dr, Cross Lanes, WV 25313</p>
                {/* </Tooltip> */}
            </div>
            <br />
            <div className='kanawha_map_trigger' onClick={() => fetchKanawha()}>
                {/* <Tooltip title="view on map"> */}
                    <h4>Kanawha</h4>
                    <p>5126 MacCorkle Ave SE, Charleston, WV 25304</p>
                {/* </Tooltip> */}
            </div>
            <br />
            <div className='huntington_map_trigger' onClick={() => fetchHuntington()}>
                {/* <Tooltip title="view on map"> */}
                    <h4>Huntington</h4>
                    <p>514 20th St, Huntington, WV 25703</p>
                {/* </Tooltip> */}
            </div>
        </div>
    )
}

export default WestVirginia;