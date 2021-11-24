import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Detail from "./routes/Detail";
import Home from "./routes/Home";
function App() {
  return <Router>
      <Routes>
        <Route  path={"/movie/:id"} element={<Detail />} />
        {/* 라우트 경로문제로 홈에는 process.env.PUBLIC_URL 추가 */}
        <Route path={process.env.PUBLIC_URL + "/"} element={<Home />} />
      </Routes>
    </Router>
    ;
}

export default App;
