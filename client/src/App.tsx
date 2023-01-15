import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Components/Home";
import Login from "./Components/Login";
import Header from "./Components/Header/Header";
import OnlineWorship from "./Components/OnlineWorship/OnlineWorship";
import QuietTime from "./Components/QuietTime/QuietTime";
import WorshipResult from "./Components/WorshipResult/WorshipResult";
import WorshipApply from "./Components/WorshipApply/WorshipApply";
import WorshipGuidance from "./Components/WorshipGuidance/WorshipGuidance";

const App = () => {
  return (
    <div className=" bg-white">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/worship-apply" component={WorshipApply} />
          <Route exact path="/worship-result" component={WorshipResult} />
          <Route exact path="/online-worship" component={OnlineWorship} />
          <Route exact path="/quiet-time" component={QuietTime} />
          <Route exact path="/worship-Guidance" component={WorshipGuidance} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
