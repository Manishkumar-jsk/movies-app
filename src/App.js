import Navbar from "./components/Navbar";
import React,{useState} from "react";
import Home from "./pages/Home";
import Footer from "./components/Footer.js"
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';

function App() {
  {/*const [movies,setMovies] = useState([]);*/}
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
