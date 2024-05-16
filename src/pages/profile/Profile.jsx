import Content from "./Content";
import SideBar from "../../components/SideBar";
import Side from "../Home/Side";
export default function Profile() {
  return (
    <div className="grid grid-cols-3cols bg-black text-white">
      <div>
        <SideBar />
      </div>

      <Content />

      <div>
        <Side />
      </div>
    </div>
  );
}
