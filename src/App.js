/*
need to install react router dom
npm install react-router-dom
*/

import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./components/helloWorld";
import NavBar from "./components/navBar";
import SetAttributes from "./components/settingAttributes";
import RenderCD from "./components/renderClassDinamic";
import EmbedingEx from "./components/embedingExpression";

function App() {
  return (
    <BrowserRouter>
    <NavBar />
      <Switch>
        <Route component={Home} path='/' exact />
        <Route component={SetAttributes} path='/settingAttributes' />
        <Route component={RenderCD} path='/renderClassDinamic' />
        <Route component={EmbedingEx} path='/embedingExpression' />
        
      </Switch>
    </BrowserRouter>
  )
}

export default App;
