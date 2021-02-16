import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/helloWorld";
import NavBar from "./components/navBar";

function App() {
  return (
    <BrowserRouter>
    <NavBar />
      <Switch>
        <Route component={Home} path='/' exact />
        
      </Switch>
    </BrowserRouter>
  )
}

export default App;
