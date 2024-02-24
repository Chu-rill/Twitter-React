import trends from "../../Data/trends";
import Trend from ".././Home/Trend";
export default function Center() {
  let trend = trends.map((trend) => {
    return (
      <>
        <Trend {...trend} />
      </>
    );
  });
  return <>{trend}</>;
}
