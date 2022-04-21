import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import Slider from "./Pages/components/CustomSwiper/Slider";
import {
  BrowserRouter as Router,
  Routes ,
  Route
} from "react-router-dom";
import Navbar from "./Pages/components/Navbar";

function App() {
  return (    
  <div className="App">
    <Router>
    <Navbar/>
      {/* <Home /> */}
      <Routes >
          <Route path="/about"
          element={
            <About />
          }/>
          <Route path="/contact"
          element={
            <Contact />
          }/>
          <Route path="/"
          element={
            <>
          <Slider/>
           <Home />
            </>
          }/>
        </Routes >
      </Router>
  </div>
  );
}

export default App;
