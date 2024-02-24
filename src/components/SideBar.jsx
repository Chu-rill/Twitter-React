import side from ".././Data/side";
import Section from "./Section";
export default function SideBar() {
  let sect = side.map((data) => {
    return (
      <>
        <Section {...data} />
      </>
    );
  });
  return (
    // fixed top-0 left-0 z-10  gave me overflow problem
    <section className="     min-h-screen overflow-scroll border-r-2 border-gray-200 ">
      <img
        loading="lazy"
        src="images/download (1).webp"
        className="h-14 w-14 p-2 hover:cursor-pointer hover:bg-gray-200 hover:rounded-full"
      />

      {sect}
      {/* <!--Tweet button--> */}
      <div className="bg-twitter-blue rounded-3xl w-[140px] h-8 mx-3 my-4 hover:cursor-pointer hover:bg-blue-500 ">
        <h1 className="font-bold text-center text-white">Tweet</h1>
      </div>
      {/* <!--profile name--> */}
      <div className="flex">
        <img src="images/bond.jpg" className="w-9 h-9 mx-5 rounded-[50%]" />
        <div className="mx-0">
          <h1 className="h-4">Çhūrçhîll👨‍💻</h1>
          <p className="text-gray-500">@chu_rill</p>
        </div>
      </div>
    </section>
  );
}
