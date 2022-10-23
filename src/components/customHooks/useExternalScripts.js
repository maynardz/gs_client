import { useEffect } from 'react';

const useExternalScripts = url => {
  useEffect(() => {
    const embedLocation = document.querySelector("#dutchieShop");
    const script = document.createElement("script");

    script.setAttribute("async", true);
    script.setAttribute("id", 'dutchie--embed__script');
    script.setAttribute("src", url);
    embedLocation.appendChild(script);

    return () => {
      embedLocation.removeChild(script);
    };
  }, [url]);
};

export default useExternalScripts;