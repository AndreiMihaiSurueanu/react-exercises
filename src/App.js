import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import DynamicInputFields from "./pages/DynamicInputFields/DynamicInputFields";
import MagicReactPopup from "./pages/MagicReactPopup/MagicReactPopup";

function App() {
  return (
    <div className="App">
        <Router>
          <Routes>
            <header className="App-header">
              <Route path="/" element={<Home />} />
            </header>
            <Route path="/dynamicInputFields" element={<DynamicInputFields />} />
            <Route path="/magicPopUp" element={<MagicReactPopup />} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
