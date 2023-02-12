import { Switch, Route } from "react-router-dom";
import Home from "./Components/pages/Home/Home";
import Login from "./Components/pages/Login/Login";
import Header from "./Components/layout/Header/Header";
import OnlineWorship from "./Components/pages/OnlineWorship/OnlineWorship";
import QuietTime from "./Components/pages/QuietTime/QuietTime";
import WorshipResult from "./Components/pages/WorshipResult/WorshipResult";
import WorshipApply from "./Components/pages/WorshipApply/WorshipApply";
import WorshipGuide from "./Components/pages/WorshipGuide/WorshipGuide";
import SignUp from "./Components/pages/SignUp/SignUp";
import PrayRequest from "./Components/pages/PrayRequest/PrayRequest";
import GraceSharing from "./Components/pages/GraceSharing/GraceSharing";
import NotFound from "./Components/layout/NotFound/NotFound";
import { Routes } from "./constants/routeItems";
import Auth from "./Components/Hoc/Auth";
import MyPage from "./Components/pages/MyPage/Mypage";
import Proclamation from "Components/pages/Proclamation/Proclamation";
import MinisterLetter from "Components/pages/MinisterLetter/MinisterLetter";
import NewFamily from "Components/pages/NewFamily/NewFamily";

const {
  home,
  login,
  signUp,
  worshipAdd,
  worshipResult,
  onlineWorship,
  worshipGuide,
  quietTime,
  prayerRequest,
  graceSharing,
  myPage,
  ministerLetter,
  proclamation,
  newFamily,
} = Routes;

const App = () => {
  return (
    <div className=" bg-white">
      <Header />
      <Switch>
        <Route exact path={home} component={Auth(Home, null)} />
        <Route exact path={login} component={Auth(Login, false)} />
        <Route exact path={signUp} component={Auth(SignUp, false)} />
        <Route exact path={worshipAdd} component={Auth(WorshipApply, null)} />
        <Route
          exact
          path={worshipResult}
          component={Auth(WorshipResult, null)}
        />
        <Route
          exact
          path={onlineWorship}
          component={Auth(OnlineWorship, null)}
        />
        <Route exact path={worshipGuide} component={Auth(QuietTime, null)} />
        <Route exact path={quietTime} component={Auth(WorshipGuide, null)} />
        <Route exact path={prayerRequest} component={Auth(PrayRequest, null)} />
        <Route exact path={graceSharing} component={Auth(GraceSharing, null)} />
        <Route exact path={myPage} component={Auth(MyPage, null)} />
        <Route exact path={proclamation} component={Auth(Proclamation, null)} />
        <Route exact path={newFamily} component={Auth(NewFamily, null)} />
        <Route
          exact
          path={ministerLetter}
          component={Auth(MinisterLetter, null)}
        />
        <Route path="*" component={Auth(NotFound, null)}></Route>
      </Switch>
    </div>
  );
};

export default App;
