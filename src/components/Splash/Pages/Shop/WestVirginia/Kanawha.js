import useExternalScripts from "../../../../customHooks/useExternalScripts";

const Kanawha = props => {

  useExternalScripts("https://dutchie.com/api/v2/embedded-menu/624c7871207e4b009d695f6b.js");

  return (
    <div>
      <div className='header'>
				<h1>Kanawha</h1>
			</div>
      <div id="dutchieShop">

      </div>
    </div>
  )
}

export default Kanawha;