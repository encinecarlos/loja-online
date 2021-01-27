import { Route, Switch } from "react-router-dom";
import Funcionarios from "./components/Funcionarios";
import Home from "./components/Home";
import Produtos from "./components/Produtos";

const Routes = () => (
  <Switch>
    <Route exact path="/">
      <Home />
    </Route>
    <Route path="/produtos">
      <Produtos />
    </Route>
    <Route path="/funcionarios">
      <Funcionarios/>
    </Route>
  </Switch>
);

export default Routes;
