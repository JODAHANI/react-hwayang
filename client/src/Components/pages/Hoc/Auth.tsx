import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../../../_actions/user_actions";
import { ReduxStateType } from "../../../constants/types";

const Auth: Function = (
  HigherOrderComponent: any,
  option: null | boolean,
  adminRoute: null | boolean = null
): Function => {
  function AuthenticationCheck(props: any): JSX.Element {
    const user = useSelector((state: ReduxStateType) => state.user);
    const dispatch: any = useDispatch();
    useEffect(() => {
      dispatch(auth()).then((res) => {
        if (!res.payload.isAuth) {
          if (option) {
            props.history.push("/");
          }
        } else {
          if (option === false) {
            props.history.push("/");
          }
        }
      });
    }, []);
    return <HigherOrderComponent {...props} user={user} />;
  }
  return AuthenticationCheck;
};

export default Auth;
