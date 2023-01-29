import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

import "../../../index.css";

const Login = (props: any): JSX.Element => {
  const [account, setAccount] = useState("");
  const [password, setPassword] = useState("");
  const accountChangeHandler = (evevt: any) => {
    setAccount(evevt.target.value);
  };
  const passwordChangeHandler = (evevt: any) => {
    setPassword(evevt.target.value);
  };
  const formHandler = (evevt: any) => {
    evevt.preventDefault();
    let userData = {
      account,
      password,
    };
    axios.post("/api/users/login", userData).then((res) => {
      console.log(res.data);
      if (res.data.loginSuccess) {
        setAccount("");
        setPassword("");
        props.history.push("/");
      } else {
        setPassword("");
        alert("뭐시고");
      }
    });
  };
  return (
    <div className="full-screen bg-[#f0f0f0] ">
      <div className="py-14 flex justify-center">
        <form
          className="bg-white max-w-xs shadow-md rounded px-8 pt-8 pb-8 mb-4"
          onSubmit={formHandler}
        >
          <div className="mb-4">
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="account"
              type="text"
              placeholder="아이디"
              value={account}
              onChange={accountChangeHandler}
            />
          </div>
          <div className="mb-2">
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              autoComplete="on"
              placeholder="비밀번호"
              value={password}
              onChange={passwordChangeHandler}
            />
          </div>
          <button
            className="block w-full bg-[#35C5F0] hover:bg-[#44bee3] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-6"
            type="submit"
          >
            로그인
          </button>
          <div className="flex items-center justify-around	">
            <Link
              className="inline-block align-baseline font-bold text-sm text-[#999] hover:text-[#777]"
              to="/user/password"
            >
              비밀번호 재설정
            </Link>
            <Link
              className="inline-block align-baseline font-bold text-sm text-[#999] hover:text-[#777]"
              to="/sign-up"
            >
              회원가입
            </Link>
          </div>
          <div>
            <Link
              className="mt-5 block mx-auto font-bold text-sm text-[#bbb] hover:text-[#777] text-center"
              to="/admin"
            >
              관리자페이지
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
