import Bottom from "./Bottom/Bottom";
import Top from "./Top/Top";
import "../../index.css";

const Header = () => {
  return (
    <header className="ttop">
      <Top />
      <Bottom />
    </header>
  );
};

export default Header;
// box-shadow: 0 0 30px #f5f4f4;
