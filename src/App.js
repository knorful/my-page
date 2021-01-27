import NavBar from "./components/Navigation/NavBar/NavBar";
import Landing from "./components/Landing/Landing";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Landing />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
