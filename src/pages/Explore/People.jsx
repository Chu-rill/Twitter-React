import { useState } from "react";

export default function People(props) {
  const [follow, setFollow] = useState(false);
  function changeText() {
    setFollow((prevState) => !prevState);
  }
  return (
    <>
      <div className="flex ">
        <img
          src={`images/${props.img}`}
          alt="image"
          loading="lazy"
          className="w-9 h-9 rounded-[50%]"
        />
        <div className="pl-1 mb-4">
          <h6 className="">{props.name}</h6>
          <p className="text-[10px]">{props.sub}</p>
        </div>
        <p
          className={`follow w-24  ml-3 rounded-3xl h-8 bg-black cursor-pointer border-2 border-gray-200 hover:bg-blue-400 text-white text-center ${
            follow === true ? "bg-blue-400 hover:bg-black" : ""
          }`}
          onClick={changeText}
        >
          {follow === false ? "Follow" : "Following"}
        </p>
      </div>
    </>
  );
}
