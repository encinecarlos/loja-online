import { Route, Switch } from "react-router-dom";
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
  </Switch>
);

export default Routes;
