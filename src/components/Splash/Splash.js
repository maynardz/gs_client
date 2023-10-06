import * as React from 'react';
import './Splash.scss';   

import Appbar from './Appbar/Appbar';
import Announcements from './Announcements/Announcements';
import Partners from './Partners/Partners';
// import AdminDrawer from './AdminDrawer/AdminDrawer';
import Footer from './Footer/Footer';

const Splash = (props) => {
  // const [keys, setKeys] = React.useState([]);
  // const [open, setOpen] = React.useState(false);

  // React.useEffect(() => {
  //   if (localStorage.getItem('token')) {
  //     props.setSessionToken(localStorage.getItem('token'))
  //   }

  //   if (localStorage.getItem('user')) {
  //     props.setUser(JSON.parse(localStorage.getItem('user')))
  //   }

  //   const callback = (e) => {
  //     // console.log(e);
  //     setKeys(prevState => [...prevState, e.keyCode]);
  //   }
    
  //   document.addEventListener('keydown', callback);

  //   return () => {
  //     document.removeEventListener('keydown', callback);
  //   }
    
  // }, [])

  // React.useEffect(() => {
  //   let toString = keys.toString();

  //   if (toString === '71,83,67,65,78,78,67,79') {
  //     setOpen(true);
  //   }
  // }, [keys]);

  // const updateLocalStorage = (new_token, user) => {
  //   localStorage.setItem('token', new_token);
  //   props.setSessionToken(new_token);

  //   localStorage.setItem('user', JSON.stringify(user));
  //   props.setUser(user);
  // }

  // const onClose = () => {
  //   setOpen(false);
  //   setKeys([]);
  // };

  return (
    <div>
      {/* {
        open ? (
          <AdminDrawer open={open} setOpen={setOpen} onClose={onClose} setUser={props.setUser} updateLocalStorage={updateLocalStorage} />
        ) : null
      } */}
      <div className='home_container'>
        <Appbar colorMode={props.colorMode} theme={props.theme} />
        <Announcements theme={props.theme} />
        {/* <div className="parallax"></div> */}
        <Partners theme={props.theme} />
        <Footer theme={props.theme} />
      </div>
    </div>
  )
}

export default Splash;