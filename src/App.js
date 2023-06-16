import './index.scss';

import { Route, Routes } from "react-router-dom";

import { Header } from './components/Header'
import { Main } from './pages/Main'
import { Time } from './pages/Time'
import { Weather } from './pages/Weather'


function App() {


  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/time" element={<Time />} />
        <Route path="/weather" element={<Weather />} />
      </Routes>

    </div>
  );
}

export default App;
