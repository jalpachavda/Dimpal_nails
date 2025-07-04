import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import About from "./components/About us/About";
import Service from "./components/Service/Service";
import Gallary from "./components/Gallary/Gallary";
import SeeMore from './components/Gallary/SeeMore';
import Price from './components/pricing/Priceing';
import Contact from './components/contact/Contact';
import Footer from "./components/Footer/Footer";


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={
            <>
              <Home />
              <About />
              <Service />
              <Gallary />
              <Price/>
              <Contact/>
              <Footer/>
            </>
          } />
          <Route path="/gallery" element={<SeeMore />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
