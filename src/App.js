import './App.scss';

import {
  Routes,
  Route,
} from "react-router-dom";

import Splash from './components/Splash/Splash';
import About from './components/Splash/Pages/About/About';
import Locations from './components/Splash/Pages/Locations/Locations';
import Jobs from './components/Splash/Pages/Jobs/Jobs';

function App() {
  return (
    <div className="App">
      <div>
        <Routes>
          <Route index element={ <Splash /> } />
          <Route path='about' element={ <About /> } />
          <Route path='locations' element={ <Locations /> } />
          <Route path='jobs' element={ <Jobs /> } />
          {/* <Route path='submission_success' element={ <SubmissionSuccess /> } /> */}
        </Routes>
      </div>
    </div>
  );
}

export default App;
