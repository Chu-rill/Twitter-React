export default function Trend(props) {
  return (
    <>
      <div className="flex mb-1">
        <p className={props.trendStyle}>{props.trend}</p>
        <i className={props.style}></i>
      </div>
      <h6 className="font-bold">{props.topics}</h6>
      <p className="text-gray-400 font-bold">{props.view}</p>
    </>
  );
}
