import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import { fullDataset } from './api'
import ProviderProfileCard from './component/ProviderProfileCard'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {fullDataset &&
          fullDataset.map((provider) => {
            return (
              <Route
                key={provider.id}
                exact
                path={`mentalWellness/provider/${provider.id}`}
                element={<ProviderProfileCard {...provider}  />}
              />
            )
          })}
        <Route
          path='/'
          element={<App />}
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
