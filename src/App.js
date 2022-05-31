import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FAQPage from "./components/FAQ";
import LandingPage from './components/LandingPage';


function App() {
  return (
    <Router>
      <div id="base-div">
          <Routes>
              {/* <Route path="/mint" element={<MintPage />} /> */}
              <Route path="/faq" element={<FAQPage />} />
              <Route path="/" element={<LandingPage />} />
          </Routes>
      </div>
    </Router>
  );
}

export default App;
