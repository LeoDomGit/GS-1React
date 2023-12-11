import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import News from './pages/News';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Detail from './pages/Detail';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/:id' element={<Detail />} />
          <Route path='/news' element={<News />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
