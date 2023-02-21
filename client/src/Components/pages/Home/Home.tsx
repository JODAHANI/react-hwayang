import "../../../index.css";
import NewFamilyNotification from "./NewFamilyNotification/NewFamilyNotification";
import Notification from "./Notification/Notification";
import SubNavigation from "./SubNavigation/SubNavigation";
import ThanksLetterNotification from "./ThanksLetterNotification/ThanksLetterNotification";

const Home = (): JSX.Element => {
  return (
    <div className="">
      <Notification />
      <SubNavigation />
      <NewFamilyNotification />
      <ThanksLetterNotification />
    </div>
  );
};

export default Home;
