import NavBar from "./components/Navigation/NavBar/NavBar";
import Landing from "./components/Landing/Landing";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Landing />
      <About />
      <Projects />
      <div>Contact</div>
    </div>
  );
}

export default App;
