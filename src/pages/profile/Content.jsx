export default function Content() {
  return (
    // <!--PROFILE-->
    <main className="border-r-2 h-full">
      <div className="flex items-center">
        <p>A</p>
        <div className="pl-10">
          <h1 className="h-4">Çhūrçhîll👨‍💻</h1>
          <p className="text-gray-500">29 tweets</p>
        </div>
      </div>
      <div className="">
        <img src="images/king.jpg" className="w-[680px] h-24 absolute" />
        <div className="relative top-14 flex items-center">
          <img
            src="images/bond.jpg"
            className="h-24 w-24 rounded-[50%] border-2 border-gray-300"
          />
          <div className="w-24 h-8 bg-white ml-44 mt-5 rounded-3xl border-2 border-gray-200 hover:cursor-pointer hover:bg-twitter-blue">
            <p className="text-center">Edit profile</p>
          </div>
        </div>
      </div>
      <div className="relative top-20 space-y-4">
        <div>
          <h1 className="h-4">Çhūrçhîll👨‍💻</h1>
          <p className="text-gray-500">@chu_rill</p>
        </div>
        <h1 className="text-[10px]">
          Aspiring Full Stack Developer👨‍💻
          <br />
          Anime&Tech Lover
        </h1>
        <p className="text-[10px]">Joined December 2022</p>
        <div className="flex">
          <p className="text-[10px]">50Following</p>
          <p className="text-[10px] pl-6">150Followers</p>
        </div>
        <div className="flex justify-evenly">
          <p>Tweets</p>
          <p>Replies</p>
          <p>Media</p>
          <p>Likes</p>
        </div>
        {/* <!--tweet--> */}
        <div className="h-36 pt-3 bg-inherit flex border-2 ">
          <img src="images/bond.jpg" className="w-9 h-9 rounded-[50%]" />
          <div className="pl-4">
            {/* <!--username--> */}
            <div className="flex bg-inherit items-center">
              <h1 className="font-bold">Çhūrçhîll👨‍💻</h1>
              <p className="font-thin text-black text-[10px]">@chu_rill.5h</p>
              <i className="fa-solid fa-ellipsis w-5 h-5 pl-[100px]"></i>
            </div>
            {/* <!--tweet--> */}
            <h1 className="text-[12px]">
              The craziest part about the Titanic sub is after it implodes,
              everyone inside will just vanish into thin air, due to the immense
              water pressure,even their skeletons will dissolve immeadiatly,
              There won't be a trace of them anywhere.
            </h1>
            {/* <!--reaction--> */}
            <div className="flex justify-evenly py-3">
              <i className="fa-regular fa-comment w-5 h-5"></i>
              <i className="fa-solid fa-retweet w-5 h-5"></i>
              <i className="fa-regular fa-heart w-5 h-5"></i>
              <i className="fa-solid fa-chart-simple w-5 h-5"></i>
              <i className="fa-solid fa-arrow-up-from-bracket w-5 h-5"></i>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
