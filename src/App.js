import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import DynamicInputFields from "./pages/DynamicInputFields/DynamicInputFields";
import MagicReactPopup from "./pages/MagicReactPopup/MagicReactPopup";
import Video from "./pages/Video/Video";

function App() {
  return (
    <div className="App">
        <Router>
          <Routes>
            <header className="App-header">
              <h1>React Exercises</h1>
              <Route path="/" element={<Home />} />
            </header>
            <Route path="/dynamicInputFields" element={<DynamicInputFields />} />
            <Route path="/magicPopUp" element={<MagicReactPopup />} />
            <Route path="/video" element={<Video />} />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
