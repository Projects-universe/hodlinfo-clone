import { useEffect, useState } from "react";

const Timer = () => {
  const timerStart = 59;

  const [countDown, setCountDown] = useState(timerStart);

  // 3dc6c1 timer
  // #6ccacb logo
  // #2e3241 lg row
//   setInterval(() => {
//       setCountDown(prev => {
//           if(prev === 0){
//               return 59
//           } else {
//               return prev-1
//           }
//       })
//   }, 1000)
//   clearInterval()

  useEffect(() => {
    const interval = setInterval(() => {
      setCountDown((prev) => {
        if(prev === 0) {
            return 59
        } else {
            return prev-1
        }
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <button className="rounded-r-full rounded-l-full p-2 text-teal-200  border-2">
      {countDown}
    </button>
  );
};
export default Timer;
