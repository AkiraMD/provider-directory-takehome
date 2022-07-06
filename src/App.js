import { fetchProviders } from './api';
import { useState, useEffect } from 'react';
import { ProviderFull } from './components/ProviderFull';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ProviderList } from './components/ProvidersList';

function App() {
  const [providers, setProviders] = useState([]);

  useEffect(() => {
    fetchProviders().then((data) => setProviders(data));
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/provider/:providerId"
            element={<ProviderFull />}
          />
          <Route
            path="/"
            element={<ProviderList providers={providers} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
