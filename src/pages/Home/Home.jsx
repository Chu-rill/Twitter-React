import SideBar from "../../components/SideBar";
import Center from "./Center";
import Side from "./Side";

export default function Home() {
  return (
    <div className="grid grid-cols-3cols dark:bg-black dark:text-white">
      <SideBar />
      <Center />
      <Side />
    </div>
    // <div className="grid grid-cols-3 w-100%">
    //   <SideBar />
    //   <Header />
    // </div>
  );
}
// gap-x-0.5
