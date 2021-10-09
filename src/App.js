import './App.css';
import About from './Components/About';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import Services from './Components/Services';
import Skills from './Components/Skills';
import Team from './Components/Team';

function App() {
  return (
    <>
    <Navbar />
    <Home />
    <About title="About me"/>
    <Services />
    <Skills title="My Skills" />
    <Team title="My Team"/>
    <Contact title="Contact Us"/>
    <Footer />
    </>
  );
}

export default App;

