import Home from "./Pages/Home";
import Slider from "./Pages/components/CustomSwiper/Slider";

function App() {
  return (    
  <div className="App">
    {/* <header className="App-header">
    Navbar is here
    </header> */}
      <Slider/>
      <Home />
      {/* <div className="data" style={{color:"white"}} >
        okoko
      </div>
      <div className="data" style={{color:"white"}} >
        okoko
      </div>
      <div className="data" style={{color:"white"}} >
        okoko
      </div> */}
  </div>
  );
}

export default App;
