import useExternalScripts from "../../../../customHooks/useExternalScripts";

const Crosslanes = props => {

  useExternalScripts("https://dutchie.com/api/v2/embedded-menu/624c7834669f6f008036db39.js");

  return (
    <div>
      <div className='header'>
				<h1>Cross Lanes</h1>
			</div>
      <div id="dutchieShop">

      </div>
    </div>
  )
}

export default Crosslanes;