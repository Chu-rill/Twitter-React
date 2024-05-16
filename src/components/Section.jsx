import { Link } from "react-router-dom";

export default function Section(props) {
  return (
    <>
      <div className={` mb-1`}>
        <div className={`${props.style}p-5 flex`}>
          {/* <p className="h-8">{icon}</p> */}
          <i className={`${props.img} mr-2 `}></i>
          <p className="flex items-center w-5 h-5 px-5 text-inherit ">
            <Link to={props.link}>{props.text}</Link>
          </p>
        </div>
      </div>
    </>
  );
}
