import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Header from "./components/header/Header";
import Services from "./components/service/Services";
import Work from "./components/work/Work";
import About from "./components/footer/About";
import { Link } from "react-scroll";

function App() {
  return (
    <div>
      <Navbar />
      <Header  />
      <Services />
      <Work  />
      <About />
      </div>
  );
}

export default App;
