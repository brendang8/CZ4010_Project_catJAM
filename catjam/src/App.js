import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./components/Home/Home.js"
import Account from "./components/Account/Account.js"

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="account" exact element={<Account />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
