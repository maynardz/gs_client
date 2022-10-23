import useExternalScripts from '../../customHooks/useExternalScripts';

const Shop = (props) => {

  useExternalScripts("https://dutchie.com/api/v2/embedded-menu/624c7834669f6f008036db39.js");

  return (
    <div id='dutchieShop'>

    </div>
  )
}

export default Shop;