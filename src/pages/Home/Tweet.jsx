import { useState } from "react";

export default function Tweet(props) {
  const [heart, setHeart] = useState(true);
  function changeHeart() {
    setHeart((prevState) => !prevState);
  }
  const [retweet, setRetweet] = useState(true);
  function chnageTweet() {
    setRetweet((prevState) => !prevState);
  }
  return (
    <div className="min-h-36 pt-3 bg-inherit flex border-2">
      <img src={`images/${props.img}`} class="w-9 h-9 rounded-[50%]" />
      <div className="flex flex-col ml-2">
        <div className="flex items-center">
          <h1 class="font-bold">{props.name}</h1>
          <p class="font-thin text-black text-[10px]">{props.sub}</p>
          <i class="fa-solid fa-ellipsis w-5 h-5 pl-[100px]"></i>
        </div>
        <h1 className="text-[12px]">{props.tweet}</h1>
        <div class="flex justify-evenly py-3">
          <i class="fa-regular fa-comment w-5 h-5 cursor-pointer"></i>
          <i
            class={`retweet fa-solid fa-retweet w-5 h-5 retweet cursor-pointer ${
              retweet === true
                ? "fa-solid fa-retweet"
                : "fa-solid fa-retweet text-green-600"
            }`}
            onClick={chnageTweet}
          ></i>
          <i
            class={`heart  w-5 h-5 cursor-pointer ${
              heart === true
                ? "fa-regular fa-heart"
                : "fa-solid fa-heart text-red-600"
            }`}
            onClick={changeHeart}
          ></i>
          <i class="fa-solid fa-chart-simple w-5 h-5 cursor-pointer"></i>
          <i class="fa-solid fa-arrow-up-from-bracket w-5 h-5 cursor-pointer"></i>
        </div>
      </div>
    </div>
  );
}
