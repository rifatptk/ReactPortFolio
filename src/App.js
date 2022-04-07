import "./App.css";
import Profile from "./PortfolioContainer/Home/Profile";
import Navigation from "./PortfolioContainer/Navigation/Navigation";
import Skills from "./PortfolioContainer/Skills/Skills";
import AboutMe from "./PortfolioContainer/AboutMe/AboutMe";

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Profile />
      <Skills/>
      <AboutMe/>
    </div>
  );
}

export default App;
