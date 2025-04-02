import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./containers/Home/Home";
import Books from "./containers/Books/Books";
import Maps from "./containers/Maps/Maps";

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/map">Map</Link>
        <Link to="/books">Books</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/map" element={<Maps />} />
        <Route path="/books" element={<Books />} />
      </Routes>
    </Router>
  );
}

export default App;
