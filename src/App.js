import logo from './logo.svg'
import React, { useState, useEffect } from 'react'
import './App.css'
import ProviderProfile from './container/ProviderDirectory'
import Breadcrumbs from './component/Breadcrumbs'


function App() {

  return (
    <div className='App bg-neutral-200 py-8'>
      <Breadcrumbs />
      <ProviderProfile></ProviderProfile>
    </div>
  )
}

export default App
