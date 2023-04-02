import axios from "axios";
import "./App.css";
import { useEffect, useState } from "react";
import Timer from "./timer";
function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const res = await axios.get("http://localhost:5000");
      // console.log(res)
      setData(res.data.coins);
    };
    getData();
  }, []);
  return (
    // <Timer />
    <div className="bg-background max-h-max font-Oswald">
      <div className="xs:flex-col xs:items-center md:flex md:justify-between md:items-center md:px-12 md:py-4">
        <div className=" text-8xl text-brand  font-semibold  p-2">HODLINFO</div>
        <div className="space-x-4">
          <button className="p-2 bg-faded-bg text-white rounded-lg px-6">
            INR
          </button>
          <button className="p-2 bg-faded-bg text-white rounded-lg px-6">
            XRP
          </button>
          {/* <button>BUY XRP</button> */}
        </div>
        <div className="flex space-x-3 text-white">
          {/* <button className="rounded-full p-2">35</button> */}
          <Timer />
          <button className="px-6 py-4 text-xl bg-timer rounded-md">
            Connect Telegram
          </button>
        </div>
      </div>
      <div className="flex flex-col p-16 text-gray-400 w-screen text-sm md:text-xl font-semibold lg:text-3xl ">
        <div className="flex justify-between text-faded-text text-center px-6 ">
          <div className="">#</div>
          <div className="">name</div>
          <div className="">last</div>
          <div className="">Buy/Sell Price</div>
          <div className="">volume</div>
          <div className="">base_unit</div>
        </div>

        {data.map((item, i) => (
          <div
            key={item._id}
            className="flex text-left px-6 py-4 text-sm md:text-md lg:text-xl  bg-faded-bg  text-white  my-3 rounded-lg font-semibold"
          >
            <div className="w-1/12">{i + 1}</div>
            <div className="w-3/12 text-center">{item.name}</div>
            <div className="w-2/12 text-left">{item.last}</div>
            <div className="w-2/12">
              {item.buy} / {item.sell}
            </div>
            <div className="w-2/12 text-center">{item.volume}</div>
            <div className="w-2/12 text-right">{item.base_unit}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
