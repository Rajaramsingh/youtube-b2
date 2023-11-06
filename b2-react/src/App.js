import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import Home from './Home.js/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Video from './video';

function App() {
  return (
    <div className="App">
     {/* <h3> my react app</h3> */}
     {/* <Home/> */}

     <BrowserRouter>
     <Routes>
      <Route exact path='/' element={<Home/>}></Route>
      <Route exact path='/video' element={<Video/>}></Route>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
