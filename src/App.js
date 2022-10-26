import { Link, Outlet, Route, BrowserRouter, Routes } from 'react-router-dom'


import logo from './logo.svg';
import './App.scss';
import Home from './components/Home/home';
import Films from './components/Films/films'
import Series from './components/Series/series'
import Serie from './components/Series/serie';
import Film from './components/Films/film';
import Favorites from './components/Favorites/favorites';


function App() {
  return (

    <BrowserRouter>


      <div className="header">
        <Link className='logo' to="/">NETFLIX</Link>
        <Link className='nav-link ' to="/series">Series</Link>
        <Link className='nav-link ' to="/films">Films</Link>
        <div className='right'>
          <Link className='nav-link ' to="/films">Recherche</Link>
          <Link className='nav-link ' to="/favorites">Mes Favoris</Link>
        </div>
      </div>

      <Routes >
        <Route index path='/' element={<Home />} ></Route>
        <Route path='/series' element={<Series />} ></Route>
        <Route path='/serie/:name' element={<Serie />} ></Route>
        <Route path='/films' element={<Films />} ></Route>
        <Route path='/film/:name' element={<Film />} ></Route>
        <Route path='/favorites' element={<Favorites />}></Route>
      </Routes>


    </BrowserRouter>
  );
}

export default App;
