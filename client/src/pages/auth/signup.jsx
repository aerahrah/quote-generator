import { useDispatch } from "react-redux";
import { SignUp } from "../../services/authApi";
import AuthContent from "./authContent";

const Signup = () => {
  const dispatch = useDispatch();
  const handleSignup = (userInfo) => {
    dispatch(SignUp(userInfo));
  };

  return <AuthContent authType={"signup"} handleAuth={handleSignup} />;
};

export default Signup;
