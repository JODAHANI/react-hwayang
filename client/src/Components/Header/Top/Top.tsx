import { Link } from "react-router-dom";

const Top = () => {
  return (
    <div className="header-top flex justify-between m-auto p-4 px-7">
      {/* <div className="header-top flex justify-between py-4 px-10 border-b-2 border-lightGray-500"> */}
      <div className="max-sm:text-sm">네비</div>
      <Link to="/">
        <h2 className="max-sm:text-base text-2xl font-bold hover:text-zinc-700 transition-all">
          Anointing Hwayang
        </h2>
      </Link>
      <div className="max-sm:text-sm">로그인</div>
    </div>
  );
};

export default Top;
