import { Route, Switch } from "react-router";
import Header from "./components/Header";
import Quiz from "./components/Quiz";
import Hypotenuse from "./components/Hypotenuse";
import Area from "./components/Area";
import Valid from "./components/Valid";

import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/quiz" component={Quiz} />
        <Route path="/hypotenuse" component={Hypotenuse} />
        <Route path="/area" component={Area} />
        <Route path="/valid" component={Valid} />
      </Switch>
    </div>
  );
}
