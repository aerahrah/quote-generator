import { Link } from "react-router-dom";
import { ErrorMessage } from "../../components/utilsComponent/errorUtils";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  clearAuthError,
  clearAuthMessage,
} from "../../store/slices/authSlices";
import { SignIn } from "../../services/authApi";
import {
  selectAuthError,
  selectAuthStatus,
  selectAuthUser,
} from "../../store/selector/authSelector";
import { useEffect } from "react";
import * as yup from "yup";
import Footer from "../../components/footer/footer";

const AuthContent = ({ authType, handleAuth }) => {
  const dispatch = useDispatch();
  const authError = useSelector(selectAuthError);
  const authStatus = useSelector(selectAuthStatus);
  const authMessage = useSelector((state) => state.auth.message);
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

    if (data.type === "auth/singin/fulfilled") {
      navigate("/generate");
    }
  };

  useEffect(() => {
    if (authStatus === "succeeded" && authMessage) {
      const timer = setTimeout(() => {
        dispatch(clearAuthMessage());
      }, 1500);
      return () => clearTimeout(timer);
    }
    if (authStatus === "failed" && authError) {
      const timer = setTimeout(() => {
        dispatch(clearAuthError());
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [authStatus, authError, authMessage]);

  return (
    <div className=" bg-neutral-100 text-neutral-700 dark:text-neutral-300 dark:bg-neutral-900 ">
      <menu className="w-full mx-auto  h-screen relative text-center min-h-[680px] p-4 md:p-8 max-w-[1064px]">
        <div className="flex items-center gap-8 lg:gap-12 flex-col justify-center w-full m-auto h-full -translate-y-8 lg:flex-row ">
          <div className="w-full flex flex-col gap-8 lg:items-start items-center">
            <h1 className="text-blue-950 dark:text-blue-400 text-5xl md:text-6xl lg:text-7xl font-black capitalize ">
              QuoteHarbor
            </h1>
            <p className="max-w-[40rem] text-lg text-center  lg:text-start ml-2">
              Elevate your day with inspirational quotes. Curate your favorite
              quotes, personalize your collection, and discover wisdom that
              resonates with you.
            </p>
          </div>
          <div className="flex flex-col bg-white ring-1 ring-neutral-300 dark:ring-0 dark:bg-neutral-800/60 p-5 md:p-6 max-w-sm w-full rounded-lg shadow-lg">
            {<ErrorMessage />}
            <h1 className="text-3xl md:text-4xl text-blue-950 dark:text-blue-400 uppercase mb-6 font-extrabold">
              {authType === "signin" ? "Sign in" : "Sign up"}
            </h1>
            <form
              onSubmit={handleSubmit(handleAuth)}
              className="flex flex-col gap-6 "
            >
              <div className="w-full relative text-lg">
                <input
                  className={`input-box outline dark:bg-neutral-900/30 dark:text-neutral-300 ${
                    errors.username
                      ? " outline-red-500"
                      : "outline-neutral-300 dark:outline-neutral-700"
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
                  className={`input-box outline dark:bg-neutral-900/30 dark:text-neutral-300 ${
                    errors.password
                      ? " outline-red-500"
                      : "outline-neutral-300 dark:outline-neutral-700"
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
                  authError || authMessage ? "scale-100" : "scale-0"
                }`}
              >
                {authError && (
                  <p className="text-red-500 absolute inset-x-0 top-1/2 translate-y-[-50%]">
                    {authError}
                  </p>
                )}
                {authMessage && (
                  <p className="text-green-500 absolute inset-x-0 top-1/2 translate-y-[-50%]">
                    {authMessage}
                  </p>
                )}
              </div>

              <input
                className="btn bg-blue-500 cursor-pointer text-neutral-50  hover:bg-blue-600 text-lg"
                type="submit"
                value={authType === "signin" ? "Sign in" : "Sign up"}
              />
            </form>
            <button
              className="btn bg-green-500 text-neutral-50 hover:bg-green-600 text-lg"
              onClick={handleGuestSignin}
            >
              Sign in with guest account
            </button>
            <button className="block mx-auto">
              {authType === "signin" ? (
                <Link className="text-gray-500 hover:text-blue-500" to="/">
                  Go to Sign up
                </Link>
              ) : (
                <Link
                  className="text-gray-500 hover:text-blue-500"
                  to="/signin"
                >
                  Go to Sign in
                </Link>
              )}
            </button>
          </div>
        </div>
        <Footer />
      </menu>
    </div>
  );
};

export default AuthContent;
