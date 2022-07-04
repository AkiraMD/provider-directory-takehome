import { Routes, Route } from 'react-router-dom';
import ProviderDirectory from './pages/ProviderDirectory';
import ProviderProfile from './pages/ProviderProfile';

function App() {
  return (
    <Routes>
      <Route path="/providers" element={<ProviderDirectory />} />
      <Route path="/providers/:providerId" element={<ProviderProfile />} />
    </Routes>
  );
}

export default App;
