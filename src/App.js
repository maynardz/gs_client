import React from "react";
import "./App.scss";

import { Routes, Route } from "react-router-dom";

import Splash from "./components/Splash/Splash";
import About from "./components/Splash/Pages/About/About";
import Locations from "./components/Splash/Pages/Locations/Locations";
import Jobs from "./components/Splash/Pages/Jobs/Jobs";
import Shop_WV_Crosslanes from "./components/Splash/Pages/Shop/WestVirginia/Crosslanes";
import Shop_WV_Kanawha from "./components/Splash/Pages/Shop/WestVirginia/Kanawha";
import BecomeAPatient from "./components/Splash/Pages/BecomeAPatient/BecomeAPatient";

import Box from "@mui/material/Box";
import { ThemeProvider, useTheme, createTheme } from "@mui/material/styles";
const ColorModeContext = React.createContext({ toggleColorMode: () => {} });

function App() {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);

  return (
    <div className="App">
      <Box
        sx={{
          bgcolor: "background.default",
        }}
      >
        <Routes>
          <Route
            index
            element={
              <Splash
                colorMode={colorMode}
                theme={theme}
                // sessionToken={sessionToken}
                // setSessionToken={setSessionToken}
                // user={user}
                // setUser={setUser}
              />
            }
          />
          <Route
            path="/about"
            element={
              <About 
                colorMode={colorMode} 
                theme={theme} 
              />
            }
          />
          <Route 
            path="shop/wv/crosslanes" 
            element={
              <Shop_WV_Crosslanes
                colorMode={colorMode}
                theme={theme}
              />
            } />
          <Route 
            path="shop/wv/kanawha" 
            element={
              <Shop_WV_Kanawha 
                colorMode={colorMode}
                theme={theme}  
              />
            } 
          />
          <Route 
            path="/locations" 
            element={
              <Locations 
                colorMode={colorMode}
                theme={theme}
              />
            } 
          />
          <Route 
            path="/jobs" 
            element={
              <Jobs 
                colorMode={colorMode}
                theme={theme}
              />
            } 
          />
          <Route 
            path="/become-a-patient" 
            element={
              <BecomeAPatient 
                colorMode={colorMode}
                theme={theme}
              />
            } 
          />
          {/* <Route path='admin/profile' element={ <AdminProfile clearLocalStorage={clearLocalStorage} /> } />  */}
        </Routes>
      </Box>
    </div>
  );
}

export default function ToggleColorMode() {
  const [mode, setMode] = React.useState("light");
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: {
            main: "#425030",
            ...(mode === "dark" && {
              main: "#ffff78",
            }),
          },
          ...(mode === "dark" && {
            background: {
              default: "#111111",
              paper: "#121212",
            },
          }),
          text: {
            ...(mode === "light"
              ? {
                  primary: "#111111",
                  secondary: "#121212",
                }
              : {
                  primary: "#fff",
                  // secondary: grey[500],
                }),
          },
        },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <App theme={theme} />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
