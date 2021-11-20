import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Deatil from "./routes/Detail";
import Home from "./routes/Home";
function App() {
  return <Router>
      <Routes>
        <Route path="/movie/:id" element={<Deatil />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
    ;
}

export default App;
