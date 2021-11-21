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
        {/* 라우트 경로 문제로 path 부분에 process.env.PUBLIC_URL 추가 */}
        <Route  path={process.env.PUBLIC_URL + "/movie/:id"} element={<Deatil />} />
        <Route path={process.env.PUBLIC_URL + "/"} element={<Home />} />
      </Routes>
    </Router>
    ;
}

export default App;
