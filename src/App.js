import './App.css';
import { fetchProviders, fetchProvider } from './api';

function App() {
  // Samples of API requests
  fetchProviders().then(console.log);
  fetchProvider('1').then(console.log);

  return (
    <div className="App">
      <h1>Provider List!</h1>
    </div>
  );
}

export default App;
