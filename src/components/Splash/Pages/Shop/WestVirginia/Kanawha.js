import useExternalScripts from "../../../../customHooks/useExternalScripts";
import Appbar from "../../../Appbar/Appbar";

import { LeftOutlined } from '@ant-design/icons';

const Kanawha = props => {

  useExternalScripts("https://dutchie.com/api/v2/embedded-menu/624c7871207e4b009d695f6b.js");

  return (
    <div>
      <div className='header'>
        <div style={{ position: 'absolute', top: 30, left: 30 }}>
          <LeftOutlined style={{ color: 'white', fontSize: '30px' }} onClick={() => window.history.back()} />
        </div>
				<h1>Kanawha</h1>
			</div>
      <Appbar />
      <div id="dutchieShop">

      </div>
    </div>
  )
}

export default Kanawha;