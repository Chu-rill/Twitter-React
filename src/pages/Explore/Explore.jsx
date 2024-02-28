import SideBar from "../../components/SideBar";
import Center from "./Center";
import Follow from "./Follow";

export default function Explore() {
  return (
    <div className="grid grid-cols-3cols dark:bg-black dark:text-white">
      <SideBar />
      <Center />
      <Follow />
    </div>
  );
}
