import "../../../index.css";
import NewFamilyNotification from "./NewFamilyNotification/NewFamilyNotification";
import Notification from "./Notification/Notification";
import SubNavigation from "./SubNavigation/SubNavigation";

const Home = (): JSX.Element => {
  return (
    <div className="">
      <Notification />
      <SubNavigation />
      <NewFamilyNotification />
    </div>
  );
};

export default Home;
