import SideBar from "../../components/SideBar";
import Side from "../Home/Side";
import Message from "./Message";
export default function Main() {
  return (
    <div className="grid grid-cols-3cols">
      <div>
        <SideBar />
      </div>
      <div>
        <Message />
      </div>
      <div>
        <Side />
      </div>
    </div>
  );
}
