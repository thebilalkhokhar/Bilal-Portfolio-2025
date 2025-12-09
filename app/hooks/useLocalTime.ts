import { useEffect, useState } from "react";

const useLocalTime = () => {
  const [localTime, setLocalTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        hour: "numeric",
        minute: "numeric",
        hour12: true,
        timeZone: "Asia/Karachi", // Pakistan timezone
      };

      const timeString = new Intl.DateTimeFormat("en-US", options).format(now);
      const utcOffset = "UTC+5";
      setLocalTime(`${timeString} ${utcOffset}`);
    };

    // Initial call
    updateTime();
    const intervalId = setInterval(updateTime, 60000);
    return () => clearInterval(intervalId);
  }, []);

  return localTime;
};

export default useLocalTime;

