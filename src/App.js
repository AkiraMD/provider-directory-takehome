import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import Providers from "./pages/Providers";
import ProviderProfile from "./pages/ProviderProfile";

function App() {
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
