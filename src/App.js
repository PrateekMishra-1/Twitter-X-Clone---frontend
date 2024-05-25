import './App.css';
import Body from './components/Body';
import { Toaster } from "react-hot-toast"

import axios from 'axios';

axios.defaults.baseURL = "https://twitter-x-clone-backend.onrender.com"
axios.defaults.withCredentials = true;

function App() {
  return (
    <div className="App">
      <Body />
      <Toaster />
    </div>
  );
}

export default App;
