import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import DynamicInputFields from "./pages/DynamicInputFields/DynamicInputFields";

function App() {
  return (
    <div className="App">
        <Router>
          <Routes>
            <header className="App-header">
              <Route path="/" element={<Home />} />
            </header>
            <Route path="/dynamicInputFields" element={<DynamicInputFields />} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
