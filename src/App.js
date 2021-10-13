import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import DynamicInputFields from "./pages/DynamicInputFields";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Routes>
            <Route
              path="/"
              element={
                <Link to="/dynamicInputFields">Dynamic Input Fields</Link>
              }
            />
            <Route path="/dynamicInputFields" element={<DynamicInputFields />} />
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
