import './App.css';
import About from './Components/About';
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
    {/* <About title="Service"/> */}
    <Services />
    <Skills title="My Skills" />
    <Team title="My Team"/>
    </>
  );
}

export default App;
