import logo from "./logo.svg";
import "./App.css";
import { Route, Routes, Redirect, Navigate } from "react-router-dom";
import Providers from "./pages/Providers";
import ProviderProfile from "./pages/ProviderProfile";

function App() {
  // Samples of API requests
  // fetchProviders().then(console.log);
  // fetchProvider("1").then(console.log);

  return (
    <Routes>
      <Route path="/providers" exact element={<Providers />} />
      <Route
        path="/provider/profile/:providerId"
        element={<ProviderProfile />}
      />
      <Route path="*" element={<Navigate to="/providers" replace />} />
    </Routes>
  );
}

export default App;
