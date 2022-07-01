import { Routes, Route } from 'react-router-dom';
import ProviderDirectory from './pages/ProviderDirectory';
import ProviderProfile from './pages/ProviderProfile';
import './App.css';
import { fetchProviders, fetchProvider } from './api';

function App() {
  // Samples of API requests
  fetchProviders().then(console.log);
  fetchProvider('1').then(console.log);

  return (
    <div className="App">
      <Routes>
        <Route path="/providers" element={<ProviderDirectory />} />
        <Route path="/providers/:providerId" element={<ProviderProfile />} />
      </Routes>
    </div>
  );
}

export default App;
