import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./routes/Home/Home";
import Users from "./routes/Users/Users";
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar/>
        <Switch>                     
          <Route path="/users">
            <Users />
          </Route>      
          <Route path="/">
            <Home />
          </Route>  
        </Switch>
      </div>
    </Router>
  );
}

export default App;
