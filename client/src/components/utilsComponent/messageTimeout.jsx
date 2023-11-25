import { useEffect } from "react";

const Timer = ({ message, setMessage }) => {
  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        setMessage("");
      }, 3000);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [message, setMessage]);

  return null;
};

export default Timer;
