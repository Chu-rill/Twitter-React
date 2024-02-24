import SideBar from "../../components/SideBar";
import Header from "./Header";
import Side from "./Side";

export default function Home() {
  return (
    <div className="grid grid-cols-3cols">
      <SideBar />
      <Header />
      <Side />
    </div>
    // <div className="grid grid-cols-3 w-100%">
    //   <SideBar />
    //   <Header />
    // </div>
  );
}
// gap-x-0.5
