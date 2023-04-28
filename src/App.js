import React from 'react';
import './App.scss';

import {
  Routes,
  Route,
} from "react-router-dom";

import Splash from './components/Splash/Splash';
import About from './components/Splash/Pages/About/About';
import Locations from './components/Splash/Pages/Locations/Locations';
import Jobs from './components/Splash/Pages/Jobs/Jobs';
import AdminProfile from './components/Splash/Pages/AdminProfile/AdminProfile';
import Shop_WV_Crosslanes from './components/Splash/Pages/Shop/WestVirginia/Crosslanes';
import Shop_WV_Kanawha from './components/Splash/Pages/Shop/WestVirginia/Kanawha';

function App() {

  const [sessionToken, setSessionToken] = React.useState(null);
  const [user, setUser] = React.useState({});

  const clearLocalStorage = () => {
    localStorage.clear();
    setSessionToken(null);
  };

  return (
    <div className="App">
      <div>
        <Routes>
          <Route index element={ 
            <Splash 
              sessionToken={sessionToken} 
              setSessionToken={setSessionToken} 
              user={user} 
              setUser={setUser} 
            /> 
          } />
          <Route path='about' element={ <About /> } />
          <Route path='locations' element={ <Locations /> } />
          <Route path='jobs' element={ <Jobs /> } />
          <Route path='shop/wv/crosslanes' element={ <Shop_WV_Crosslanes /> } />
          <Route path='shop/wv/kanawha' element={ <Shop_WV_Kanawha /> } />
          <Route path='admin/profile' element={ <AdminProfile clearLocalStorage={clearLocalStorage} /> } /> 
        </Routes>
      </div>
    </div>
  );
}

export default App;
