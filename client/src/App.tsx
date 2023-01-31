import { useState } from "react";
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
import Auth from "./Components/pages/Hoc/Auth";
import NotFound from "./Components/layout/NotFound/NotFound";
import LoadingModal from "./Components/layout/LoadingModal/LoadingModal";
import { Routes } from "./constants/routeItems";

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
} = Routes;

const App = () => {
  const [isModal, setIsModal] = useState(false);

  const showModalHandler = () => {
    setIsModal(true);
  };

  return (
    <div className=" bg-white">
      {isModal && <LoadingModal />}
      <Header />
      <Switch>
        <Route exact path={home} component={Auth(Home, null, true)} />
        <Route exact path={login} component={Auth(Login, null)} />
        <Route exact path={signUp} component={Auth(SignUp, null)} />
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
        <Route path="*" component={NotFound}></Route>
      </Switch>
    </div>
  );
};

export default App;
