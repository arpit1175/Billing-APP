import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Bill from './pages/Bill';

import {
  BrowserRouter as Router,
  Routes,
  Route, 
} from "react-router-dom";


function App() {
  return (

   <>

<Router>
  <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/bill" element={<Bill />}/>
  </Routes>
</Router>


   </>
  );
}

export default App;
