import logo from "./logo.svg";

import Input from "./components/Input";
import "./App.css";
import Navbar from "./components/Navbar";
import Details from "./components/Details";
import HeroImage from "./components/HeroImage";

function App() {
  return (
    <>
      <div className="row">
        <div className="col col-nav">
          <Navbar />
        </div>
        <div className="col col-img">
          <HeroImage />
        </div>
        <div className="col col-details">
          <Details />
        </div>
      </div>
    </>
  );
}

export default App;
