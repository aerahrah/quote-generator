import { Link } from "react-router-dom";
import { ErrorMessage } from "../../components/utilsComponent/errorUtils";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { clearAuthError } from "../../store/slices/authSlices";
import { SignIn } from "../../services/authApi";
import {
  selectAuthError,
  selectAuthStatus,
} from "../../store/selector/authSelector";
import { useEffect } from "react";
import * as yup from "yup";
import Footer from "../../components/footer/footer";

const AuthContent = ({ authType, handleAuth }) => {
  const dispatch = useDispatch();
  const authError = useSelector(selectAuthError);
  const authStatus = useSelector(selectAuthStatus);
  const navigate = useNavigate();
  const schema = yup.object().shape({
    username: yup
      .string()
      .required("Username is required")
      .min(4, "Username must be at least 4 characters"),
    password: yup
      .string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const handleGuestSignin = async () => {
    const userInfo = {
      username: "WiMt6FagfShTkTobAs76x9zCwgQ7MOid",
      password: "hdUCnPLZ4oBGPhFy7Wz6DalGpJZhhJhL",
    };

    const data = await dispatch(SignIn(userInfo));
    console.log(data);
    if (data.type === "/auth/singin/fulfilled") {
      navigate("/quote-generator");
    }
  };

  useEffect(() => {
    if (authStatus === "failed" && authError) {
      const timer = setTimeout(() => {
        dispatch(clearAuthError());
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [authStatus, authError, dispatch]);
  return (
    <menu className="w-full h-screen text-center p-8 text-stone-200 bg-gray-900">
      <div className="flex items-center gap-6 flex-col justify-center w-full m-auto h-full -translate-y-8 lg:flex-row">
        <h1 className="text-blue-400 text-6xl md:text-7xl lg:text-8xl font-black capitalize lg:w-1/2 lg:-translate-y-8 animate-pulse">
          Quote Generator
        </h1>
        <div className="flex flex-col bg-gray-800 p-6 max-w-sm w-full rounded-lg shadow-xl">
          {<ErrorMessage />}
          <h1 className="text-4xl uppercase mb-6 font-bold">
            {authType === "signin" ? "Sign in" : "Sign up"}
          </h1>
          <form
            onSubmit={handleSubmit(handleAuth)}
            className="flex flex-col gap-6 "
          >
            <div className="w-full relative text-lg">
              <input
                className={`input-box ${
                  errors.username ? "outline outline outline-red-500" : ""
                }`}
                type="text"
                placeholder="Username"
                {...register("username")}
              />
              <p className="absolute text-xs text-red-500">
                {errors.username?.message}
              </p>
            </div>
            <div className="w-full relative text-lg">
              <input
                className={`input-box ${
                  errors.password ? "outline outline outline-red-500" : ""
                }`}
                type="password"
                placeholder="Password"
                {...register("password")}
              />
              <p className="absolute text-xs text-red-500">
                {errors.password?.message}
              </p>
            </div>
            <div
              className={`w-full relative transition duration-200 ${
                authError ? "scale-100" : "scale-0"
              }`}
            >
              {authError && (
                <p className="absolute inset-x-0 top-1/2 translate-y-[-50%]">
                  {authError}
                </p>
              )}
            </div>

            <input
              className="btn bg-blue-600 cursor-pointer"
              type="submit"
              value={authType === "signin" ? "Sign in" : "Sign up"}
            />
          </form>
          <button className="btn bg-green-600" onClick={handleGuestSignin}>
            Sign in with guest account
          </button>
          {authType === "signin" ? (
            <Link className="text-gray-500" to="/">
              Go to Sign up
            </Link>
          ) : (
            <Link className="text-gray-500" to="/signin">
              Go to Sign in
            </Link>
          )}
        </div>
      </div>
      <Footer />
    </menu>
  );
};

export default AuthContent;
