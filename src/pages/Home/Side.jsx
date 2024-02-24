import trends from "../../Data/trends";
import Trend from "./Trend";
export default function Side() {
  let trend = trends.map((trend) => {
    return (
      <>
        <Trend {...trend} />
      </>
    );
  });
  return (
    <div className="h-100% p-4">
      {/* <!--search icon--> */}
      <div className="bg-gray-100 flex rounded-2xl hover:cursor-pointer mb-4 h-12 p-4 focus:border-2 focus:border-black sticky top-0">
        <div className="flex items-center">
          <i className="fa-solid fa-magnifying-glass w-5 h-5"></i>
          <input
            type="text"
            className="border-none bg-inherit focus:outline-none  rounded-lg"
            placeholder="Search Twitter"
          />
        </div>
      </div>
      {/* <!-- Get verified--> */}
      <div class="h-32 font-bold space-y-2 rounded-lg p-2 bg-gray-100 border-2 mb-2">
        <h1>Get verified</h1>
        <h4>Subscribe to get new features</h4>
        <button class="w-[120px] bg-black text-white rounded-lg text-center ">
          Get Verified
        </button>
      </div>
      {/* trends */}
      <div className="bg-gray-100 h-100% rounded-lg border-2">
        <div className="space-y-4 pt-1 pl-1">
          <h1 className="font-bold">Trends for you</h1>
          {trend}
        </div>
      </div>
    </div>
  );
}
