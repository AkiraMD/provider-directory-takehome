import { Routes, Route, Navigate } from 'react-router-dom';
import ProviderDirectory from './pages/ProviderDirectory';
import ProviderProfile from './pages/ProviderProfile';

function App() {
  return (
    <Routes>
      {/* RESTful Routing */}
      <Route path="/providers" element={<ProviderDirectory />} />
      <Route path="/providers/:providerId" element={<ProviderProfile />} />
      <Route path="*" element={<Navigate to="/providers" replace />} />
    </Routes>
  );
}

export default App;
