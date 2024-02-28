import trends from "../../Data/trends";
import Trend from "./Trend";
export default function Center() {
  let trend = trends.map((trend) => {
    return (
      <>
        <Trend {...trend} />
      </>
    );
  });
  return (
    <main className="border-r-2 border-gray-200 ">
      <div className=" flex items-center justify-around">
        <div className="flex items-center rounded-2xl  mb-4 h-12 p-4 focus:border-2 focus:border-black sticky top-0 bg-gray-100 w-[80%] dark:bg-inherit">
          <i className="fa-solid fa-magnifying-glass w-5 h-5"></i>
          <input
            type="text"
            className="border-none bg-inherit focus:outline-none rounded-lg hover:cursor-pointer w-[80%] "
            placeholder="Search Twitter"
          />
        </div>
        <i className="fa-solid fa-gear "></i>
      </div>

      {trend}
    </main>
  );
}
