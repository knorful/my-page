import NavBar from "./components/Navigation/NavBar/NavBar";
import Landing from "./components/Landing/Landing";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Landing />
      <div>About Me</div>
      <div>Projects</div>
      <div>Contact</div>
    </div>
  );
}

export default App;
