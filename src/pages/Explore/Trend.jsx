export default function Trend(props) {
  return (
    <div className="ml-8">
      <div className="flex mb-1 space-y-4 ">
        <p className={props.trendStyle}>{props.trend}</p>
        <i className="fa-solid fa-ellipsis w-5 h-5 pl-[10px] text-gray-400"></i>
      </div>
      <h6 className="font-bold">{props.topics}</h6>
      <p className="text-gray-400 font-bold">{props.view}</p>
    </div>
  );
}
