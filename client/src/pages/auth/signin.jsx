import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { SignIn } from "../../services/authApi";
import AuthContent from "./authContent";

const Signin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignin = async (userInfo) => {
    console.log(userInfo);
    const data = await dispatch(SignIn(userInfo));
    if (data.type === "/auth/singin/fulfilled") {
      navigate("/quote-generator");
    }
  };

  return <AuthContent authType={"signin"} handleAuth={handleSignin} />;
};
export default Signin;
