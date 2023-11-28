import { useEffect } from "react";
import { useDispatch } from "react-redux";
const Timer = ({ message, clearMessageFunction }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        dispatch(clearMessageFunction());
      }, 2000);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [message, dispatch]);

  return null;
};

export default Timer;
