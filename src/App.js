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
import RList from "./components/renderList";
import HandleEvents from "./components/handlingEvents";
import PassArg from "./components/passingArguments";

function App() {
  return (
    <BrowserRouter>
    <NavBar />
      <Switch>
        <Route component={Home} path='/' exact />
        <Route component={SetAttributes} path='/settingAttributes' />
        <Route component={RenderCD} path='/renderClassDinamic' />
        <Route component={EmbedingEx} path='/embedingExpression' />
        <Route component={RList} path='/renderList' />
        <Route component={HandleEvents} path='/handlingEvents' />
        <Route component={PassArg} path='/passingArguments' />
        
      </Switch>
    </BrowserRouter>
  )
}

export default App;
