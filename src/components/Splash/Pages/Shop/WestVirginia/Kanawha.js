import useExternalScripts from "../../../../customHooks/useExternalScripts";
import Appbar from "../../../Appbar/Appbar";

import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const Kanawha = props => {

  useExternalScripts("https://dutchie.com/api/v2/embedded-menu/624c7871207e4b009d695f6b.js");

  return (
    <div>
      <Appbar />
      <div className='header'>
        <div style={{ position: 'absolute', top: 100, left: 30 }}>
          <ArrowBackIosIcon style={{ color: '#425030', fontSize: '30px' }} onClick={() => window.history.back()} />
        </div>
				<h1>Kanawha</h1>
			</div>
      <div id="dutchieShop">

      </div>
    </div>
  )
}

export default Kanawha;