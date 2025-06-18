import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LogIn from "./Components/LogIn";
import SignUp from "./Components/SignUp";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LogIn />} />
          <Route path="/jobPortal/SignUp" element={<SignUp />} />;
        </Routes>
      </Router>
    </div>
  );
}

export default App;
