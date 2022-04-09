import logo from "./logo.svg";
import "./App.css";
import { fetchProviders, fetchProvider } from "./api";
import { Box, useTheme } from "@chakra-ui/react";
import { Route, Routes, Redirect, Navigate } from "react-router-dom";
import Providers from "./pages/Providers";

function App() {
  // Samples of API requests
  fetchProviders().then(console.log);
  fetchProvider("1").then(console.log);

  const theme = useTheme();

  return (
    <Routes>
      <Route path="/providers" exact element={<Providers />} />
      <Route path="*" element={<Navigate to="/providers" replace />} />
    </Routes>
    // <div className="App">
    //   <Box bg="brand.900" color={theme.colors.primary[500]}>
    //     Welcome
    //   </Box>
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

function Home() {
  return (
    <>
      <main>
        <h2>Welcome to the homepage!</h2>
        <p>You can do this, I believe in you.</p>
      </main>
      <nav>{/* <Link to="/about">About</Link> */}</nav>
    </>
  );
}

export default App;
