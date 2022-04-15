import logo from './logo.svg'
import './App.css'
import { fetchProviders, fetchProvider } from './api'
import ProviderProfile from './container/ProviderDirectory' 

function App() {
  // Samples of API requests
  fetchProviders().then(console.log)
  fetchProvider('1').then(console.log)

  return (
    <div className='App bg-neutral-200'>
      <ProviderProfile></ProviderProfile>
    </div>
  )
}

export default App
