import SideBar from "../../components/SideBar";
import Center from "./center";

export default function Main() {
  return (
    <div className="grid grid-cols-3cols">
      <SideBar />
      <Center />
    </div>
  );
}
