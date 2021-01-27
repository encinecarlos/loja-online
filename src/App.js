import "./App.css";
import Header from "./components/Header";
import Base from "./components/Base";
import Routes from "./routes";

function App() {
  return (
    <Base>
      <Header />
      <Routes />
    </Base>
  );
}

export default App;
