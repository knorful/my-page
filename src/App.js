import NavBar from "./components/Navigation/NavBar/NavBar";
import Landing from "./components/Landing/Landing";
import About from "./components/About/About";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Landing />
      <About />
      <div>Projects</div>
      <div>Contact</div>
    </div>
  );
}

export default App;
