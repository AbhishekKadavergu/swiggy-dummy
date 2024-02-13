import { useEffect, useState } from "react";

export const useOnlineStatus = () => {
  const [isOnline, setIsOnline] = useState(true);
  useEffect(() => {
    window.onoffline = (event) => {
      setIsOnline(false);
    };

    window.ononline = (event) => {
      setIsOnline(true);
    };
  }, []);

  return isOnline;
};
