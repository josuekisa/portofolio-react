import About from "./components/About";
import Competences from "./components/Competences";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar"
import Work from "./components/Work";

function App() {
  return (
    <div>
     <Navbar />
     <Home />
     <About/>
     <Competences/>
     <Work />
    <Contact/>
    <Footer/>
    </div>
  );
}

export default App;
