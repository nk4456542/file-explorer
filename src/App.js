import "./App.css";
import ShowFiles from "./components/ShowFiles";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="app-container">
      <Sidebar />
      <ShowFiles />
    </div>
  );
}

export default App;
