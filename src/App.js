import NavBar from "./components/Navigation/NavBar/NavBar";
import Landing from "./components/Landing/Landing";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Landing />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
