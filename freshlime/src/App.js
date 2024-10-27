import "./App.css";
import Header from "./components/Header";
import Welcome from "./components/Welcome";
import How from "./components/How";
import Inside from "./components/Inside";
import Wework from "./components/Wework";
import Pricing from "./components/Pricing";

function App() {
  return (
    <div className="App">
      <Header />
      <Welcome />
      <How />
      <Inside />
      <Wework />
      <Pricing />
    </div>
  );
}

export default App;
