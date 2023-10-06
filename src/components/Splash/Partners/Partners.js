import React from 'react';
import './Partners.scss';

import ACCM from './ACCM/ACCM';

const initialState = {
   partner_accm: false,
}

const Partners = (props) => {
    console.log(props);
    const [partners, setPartners] = React.useState(initialState);

    React.useEffect(() => {
        handleUpdate('partner_accm');
    }, []);

    const handleUpdate = partner => {
        const newState = { ...initialState };
        // console.log(newState); // always all false
        newState[partner] = true;
        // console.log(newState);
        setPartners(newState);
    }

    return (
        <div style={{marginTop: '2em', padding: '2em'}}>
            <div className='partners_heading'>
                <h1 sx={{
                    color: props.theme.palette.mode === "light" ? "#425030" : "ffff78"
                }}>Our Partners</h1>
                <hr />
            </div>
            <div className='partners_nav'>
                <nav>
                    <ul>
                        <li onClick={() => handleUpdate('partner_accm') }>
                            <h5>ACCM</h5>
                        </li>
                    </ul>
                </nav>
            </div>
            {
                partners.partner_accm ? <ACCM /> : null
            }
        </div>
    )
}

export default Partners;