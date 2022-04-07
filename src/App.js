import "./App.css";
import Profile from "./PortfolioContainer/Home/Profile";
import Navigation from "./PortfolioContainer/Navigation/Navigation";
import Skills from "./PortfolioContainer/Skills/Skills";

function App() {
  return (
    <div className="App">
      <Navigation/>
      <Profile />
      <Skills/>
    </div>
  );
}

export default App;
