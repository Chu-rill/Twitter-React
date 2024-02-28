import SideBar from "../../components/SideBar";
import Side from "../Home/Side";
import Message from "./Message";
export default function Main() {
  return (
    <div className="grid grid-cols-3cols dark:bg-black dark:text-white">
      <div>
        <SideBar />
      </div>

      <Message />

      <div>
        <Side />
      </div>
    </div>
  );
}
