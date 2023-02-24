import React from 'react';
import './ACCM.scss';

import ACCM_logo from '../../../../assets/web/accm_logo.jpg';

const ACCM = (props) => {
  return (
    <div>
      <div className='partner_wrapper'>
        <div className='accm_wrapper'>
          <div className='accm_logo'>
              <img src={ACCM_logo} alt='American Council of Cannabis Medicine logo' />
          </div>
            <div className='accm_blurb'>
              <p>The American Council of Cannabis Medicine is the “Voice of American Medical Cannabis.” ACCM represents America’s medical-cannabis industry, which supports millions of U.S. jobs and is backed by a growing grassroots movement, supporting millions of beneficiaries.</p>
              <p> Members produce, process, and distribute medical cannabis through state-licensed
              programs, as well as, supporting companies, healthcare industry, physicians, researchers,
              health/wellness providers, insurance companies, systems, and patient advocacy groups. They participate in ACCM&#39;s 15 standing area-centric committees. ACCM was started in 2016 as a Capitol Hill working group and has developed into a mission driven 501c4.</p>
              <p>Our pressing objective is to facilitate legislation that advances medical cannabis at the federal level and improve state access.</p>
              <div style={{textAlign: 'center', padding: '2em 0 2em 0'}}>
                  <a href='https://accmforum.org/' target="_blank" rel="noreferrer" style={{ color: '#4c87a1' }}>Visit Site </a>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default ACCM;