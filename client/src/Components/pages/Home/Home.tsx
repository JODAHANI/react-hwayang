import "../../../index.css";
import Notification from "./Notification/Notification";
import SubNavigation from "./SubNavigation/SubNavigation";

const Home = (): JSX.Element => {
  return (
    <div className="">
      <Notification />
      <SubNavigation />
    </div>
  );
};

export default Home;
