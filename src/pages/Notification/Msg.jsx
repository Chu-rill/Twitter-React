import { useState } from "react";

export default function Msg(props) {
  const [state, setState] = useState(true);
  function change() {
    setState((prevStae) => !prevStae);
  }
  return (
    <div
      className={`mt-2 state flex cursor-pointer items-center mb-3 p-1 rounded-2xl ${
        state === true ? " bg-blue-400" : " bg-gray-600"
      }`}
      onClick={change}
    >
      <img
        src={`images/${props.img}`}
        alt="image"
        className="w-9 h-9 rounded-[50%]"
      />
      <p className="text-[14px] pl-2">{props.msg}</p>
    </div>
  );
}
