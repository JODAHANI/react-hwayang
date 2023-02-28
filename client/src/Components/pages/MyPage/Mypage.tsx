import { useDispatch } from "react-redux";
import { userLogout } from "../../../_actions/user_actions";

const MyPage = ({ history }) => {
  const dispatch: any = useDispatch();
  const logoutHandler = () => {
    dispatch(userLogout()).then((res) => {
      if (res.payload.success) {
        history.push("/login");
      }
    });
  };

  return (
    <div>
      <button onClick={logoutHandler}>로그아웃</button>
    </div>
  );
};

export default MyPage;
