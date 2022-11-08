import React from 'react';
import './Locations.scss';

import WestVirginia from './States/WestVirginia/WestVirginia';
import NewMexico from './States/NewMexico/NewMexico';
import Maine from './States/Maine/Maine';
import Massachusetts from './States/Massachusetts/Massachusetts';
import NewJersey from './States/NewJersey/NewJersey';

import { Wrapper } from "@googlemaps/react-wrapper";
import { createCustomEqual } from "fast-equals";
import { isLatLngLiteral } from "@googlemaps/typescript-guards";

import api_key from '../../../helpers/google';

const initialState = {
	location_wv: false,
	location_nm: false,
	location_me: false,
	location_ma: false,
	location_nj: false
}
  
const Locations = (props) => {

	const [state, setState] = React.useState(initialState);
	const [latLng_values, setLatLng_values] = React.useState();
	const [zoom, setZoom] = React.useState(3);
	const [center, setCenter] = React.useState({
		lat: 37.0902,
		lng: -95.7129,
	});

	React.useEffect(() => {
		handleUpdate('location_wv');
	}, []);

	const onIdle = (m) => {
		console.log('onIdle');
		setZoom(m.getZoom());
		setCenter(m.getCenter().toJSON());
	};

	const handleUpdate = location => {
		const newState = { ...initialState };
		// console.log(newState); // always all false
		newState[location] = true;
		// console.log(newState);
		setState(newState);
	}
      
	return (
		<div>
			<>
				<div className='header'>
					<h1>Locations</h1>
				</div>
				<div>
					<div className='locations_nav'>
						<nav>
							<ul>
								<li onClick={() => handleUpdate('location_wv') }>
									<h5>West Virginia</h5>
								</li>
								<li onClick={() => handleUpdate('location_nm') }>
									<h5>New Mexico</h5>
								</li>
								<li onClick={() => handleUpdate('location_me')}>
									<h5>Maine</h5>
								</li>
								<li onClick={() => handleUpdate('location_ma')}>
									<h5>Massachusetts</h5>
								</li>
								<li onClick={() => handleUpdate('location_nj')}>
									<h5>New Jersey</h5>
								</li>
							</ul>
						</nav>
					</div>
				</div>
				<hr style={{width: '80vw', margin: 'auto',
				marginBottom: '5em'}} />
				<div>
					<div className='locations_wrapper'>
						<div className='list_container'>
							{
								state.location_wv ? <WestVirginia setLatLng_values={setLatLng_values} setCenter={setCenter}
								setZoom={setZoom} /> : null
							}
							{
								state.location_nm ? <NewMexico setCenter={setCenter} setZoom={setZoom} /> : null
							}
							{
								state.location_me ? <Maine setCenter={setCenter} setZoom={setZoom} /> : null
							}
							{
								state.location_ma ? <Massachusetts setCenter={setCenter} setZoom={setZoom} /> : null
							}
							{
								state.location_nj ? <NewJersey setCenter={setCenter} setZoom={setZoom} /> : null
							}
						</div>
						<Wrapper apiKey={api_key} className='map_container'>
							<Map
								center={center}
								onIdle={onIdle}
								zoom={zoom}
								style={{ height: '500px', width: '900px', }}
							>
								<Marker position={latLng_values} />
							</Map>
						</Wrapper>
					</div>
				</div>
				<div className='ceo_container'></div>
			</>
		</div>
	)
}

const Map = ({ onClick, onIdle, children, style, ...options }) => {

	const [map, setMap] = React.useState();
	const ref = React.useRef(null);

	React.useEffect(() => {
		if (ref.current && !map) {
				setMap(new window.google.maps.Map(ref.current, {}));
		}
	}, [ref, map]);
	
	useDeepCompareEffectForMaps(() => {
		if (map) {
				map.setOptions(options);
		}
	}, [map, options]);

	React.useEffect(() => {
		if (map) {
			["click", "idle"].forEach((eventName) =>
				window.google.maps.event.clearListeners(map, eventName)
			);
			if (onClick) {
				map.addListener("click", onClick);
			}

			if (onIdle) {
				map.addListener("idle", () => onIdle(map));
			}
		}
		}, [map, onClick, onIdle]);

	return (
		<>
			<div ref={ref} style={style} />
			{React.Children.map(children, (child) => {
					if (React.isValidElement(child)) {
							return React.cloneElement(child, { map });
					}
			})}
		</>
	)
}

const Marker = (options) => {
	const [marker, setMarker] = React.useState();

	React.useEffect(() => {
		if (!marker) {
			setMarker(new window.google.maps.Marker());
		}

		// remove marker from map on unmount
		return () => {
			if (marker) {
				marker.setMap(null);
			}
		};
	}, [marker]);
	
	React.useEffect(() => {
		if (marker) {
			marker.setOptions(options);
		}
	}, [marker, options]);
	return null;
};

const deepCompareEqualsForMaps = createCustomEqual((deepEqual) => (a, b) => {
	if (
		isLatLngLiteral(a) ||
		a instanceof window.google.maps.LatLng ||
		isLatLngLiteral(b) ||
		b instanceof window.google.maps.LatLng
	) {
		return new window.google.maps.LatLng(a).equals(new window.google.maps.LatLng(b));
	}
	// TODO extend to other types
	// use fast-equals for other objects
	return deepEqual(a, b);
});

function useDeepCompareMemoize(value) {
	const ref = React.useRef();

	if (!deepCompareEqualsForMaps(value, ref.current)) {
		ref.current = value;
	}
	return ref.current;
}

function useDeepCompareEffectForMaps(callback, dependencies) {
	React.useEffect(callback, dependencies.map(useDeepCompareMemoize));
}

export default Locations;