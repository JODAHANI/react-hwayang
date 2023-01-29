import { Switch, Route } from "react-router-dom";
import Home from "./Components/User/Home/Home";
import Login from "./Components/User/Login/Login";
import Header from "./Components/User/Header/Header";
import OnlineWorship from "./Components/User/OnlineWorship/OnlineWorship";
import QuietTime from "./Components/User/QuietTime/QuietTime";
import WorshipResult from "./Components/User/WorshipResult/WorshipResult";
import WorshipApply from "./Components/User/WorshipApply/WorshipApply";
import WorshipGuidance from "./Components/User/WorshipGuidance/WorshipGuidance";
import SignUp from "./Components/User/SignUp/SignUp";
import PrayRequest from "./Components/User/PrayRequest/PrayRequest";
import GraceSharing from "./Components/User/GraceSharing/GraceSharing";
import Auth from "./Components/User/Hoc/Auth";
import NotFound from "./Components/User/NotFound/NotFound";

const App = () => {
  return (
    <div className=" bg-white">
      <Header />
      <Switch>
        <Route exact path="/" component={Auth(Home, null, true)} />
        <Route exact path="/login" component={Auth(Login, null)} />
        <Route exact path="/sign-up" component={Auth(SignUp, null)} />
        <Route exact path="/admin" component={Auth(SignUp, null)} />
        <Route
          exact
          path="/worship-apply"
          component={Auth(WorshipApply, null)}
        />
        <Route
          exact
          path="/worship-result"
          component={Auth(WorshipResult, null)}
        />
        <Route
          exact
          path="/online-worship"
          component={Auth(OnlineWorship, null)}
        />
        <Route exact path="/quiet-time" component={Auth(QuietTime, null)} />
        <Route
          exact
          path="/worship-Guidance"
          component={Auth(WorshipGuidance, null)}
        />
        <Route exact path="/pray-request" component={Auth(PrayRequest, null)} />
        <Route
          exact
          path="/grace-sharing"
          component={Auth(GraceSharing, null)}
        />
        <Route path="*" component={NotFound}></Route>
      </Switch>
    </div>
  );
};

export default App;
