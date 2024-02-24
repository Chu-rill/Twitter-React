export default function Header() {
  return (
    <main className="border-r-2 border-gray-200 ">
      {/* //for you / following */}
      <div className="sticky top-0 pb-2 border-b-2 border-gray-200 flex pt-[35px] pl-4 justify-around w-[100%]">
        <div className="space-x-1 flex">
          <p>For</p>
          <p>you</p>
        </div>
        <p>Following</p>
        {/* <i class="fa-regular fa-gear"></i> */}
        <i className="fa-solid fa-gear "></i>
      </div>
      {/* // --tweet info-- */}
      <div className=" pt-3 pl-2 h-36 flex border-b-2 border-gray-200 ">
        <img src="images/bond.jpg" className="w-12 h-12 rounded-[50%]" />
        <div className="pl-4 w-96">
          <input
            placeholder="Whats is happening?!"
            className="input focus:outline-none border-1 "
          />
          <div className="flex mt-14">
            <div>
              <i className="fa-regular fa-image w-6 h-6 hover:cursor-pointer text-twitter-blue"></i>
              <i className="fa-regular fa-face-smile w-6 h-6 hover:cursor-pointer text-twitter-blue"></i>
              <i className="fa-solid fa-list w-6 h-6 hover:cursor-pointer text-twitter-blue"></i>
              <i className="fa-regular fa-calendar w-6 h-6 hover:cursor-pointer text-twitter-blue"></i>
              <i className="fa-solid fa-location-dot w-6 h-6 hover:cursor-pointer text-twitter-blue"></i>
            </div>
            <button className="post w-[60px] bg-twitter-blue rounded-lg text-center opacity-50  text-white font-bold ml-44">
              Tweet
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
