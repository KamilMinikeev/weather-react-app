import './index.scss';

import { Route, Routes, Link } from "react-router-dom";

import { Header } from './components/Header'
import { Time } from './pages/Time'
import { Weather } from './pages/Weather'


function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route
          path="/"
          element={
            <div className="content">
              <div className="container">
                <h1>Главная</h1>
                <div className="content__menu">
                  <Link to="/time">
                    <button className='content__btn button'>Текущее время</button>
                  </Link>
                  <Link to="/weather">
                    <button className='content__btn button'>Погода</button>
                  </Link>

                </div>
              </div>
            </div>
          }
        />

        <Route
          path="/time"
          element={
            <Time />
          }
        />

        <Route
          path="/weather"
          element={
            <Weather />
          }
        />

      </Routes>



    </div>
  );
}

export default App;
