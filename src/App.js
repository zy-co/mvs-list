import './App.css';
import './style/LandingPage.css';
import NavigationBar from "./components/NavigationBar";
import Upcoming from "./components/Trending";
import Watched from "./components/Superhero";
import Intro from "./components/Intro";

function App() {
  return (
    <div>
      <div className="bgImg">
        <NavigationBar />
        <Intro />
      </div>
      <div className="trending">
        <Upcoming />
      </div>
      <div className="superhero">
        <Watched />
      </div>
    </div>
  );
}

export default App;
