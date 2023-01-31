const Auth: Function = (
  HigherOrderComponent: any,
  reload: null | boolean,
  adminRoute: null | boolean = null
): Function => {
  function AuthenticationCheck(props: any): JSX.Element {
    const user = false;
    return <HigherOrderComponent {...props} user={user} />;
  }
  return AuthenticationCheck;
};

export default Auth;
