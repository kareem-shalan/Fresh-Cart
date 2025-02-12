import React from "react";
import { Route, Switch } from "react-router-dom";
import Checkout from "./Component/Checkout/Checkout";
import Allorders from "./Component/Allorders/Allorders";

function App() {
  return (
    <Switch>
      <Route path="/checkout" component={Checkout} />
      <Route path="/orders" component={Allorders} />
      {/* ...other routes... */}
    </Switch>
  );
}

export default App;
