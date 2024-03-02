import { useState } from "react";
import { addTweet } from "./Center"; // Import the addTweet function

export default function Header() {
  const [inputValue, setInputValue] = useState(""); // State to hold input value

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleTweetButtonClick = () => {
    // Call addTweet function with input values and pass setTweets as a parameter
    addTweet(
      "Çhūrçhîll👨‍💻",
      "images/bond.jpg",
      "@chu_rill .5h",
      inputValue,
      setTweets
    );
    setInputValue(""); // Clear input value after tweeting
  };

  return (
    <main className="border-r-2 border-gray-200">
      {/* For you / Following */}
      <div className="sticky top-0 pb-2 border-b-2 border-gray-200 flex pt-[35px] pl-4 justify-around w-[100%]">
        <div className="space-x-1 flex">
          <p>For</p>
          <p>you</p>
        </div>
        <p>Following</p>
      </div>
      {/* Tweet info */}
      <div className="pt-3 pl-2 h-36 flex border-b-2 border-gray-200">
        <img src="images/bond.jpg" className="w-12 h-12 rounded-[50%]" />
        <div className="pl-4 w-96">
          <input
            placeholder="What's happening?!"
            className="input input focus:outline-none border-1 bg-inherit"
            value={inputValue}
            onChange={handleInputChange}
          />
          <div className="flex mt-14">
            <div>
              <i className="fa-regular fa-image w-6 h-6 hover:cursor-pointer text-twitter-blue"></i>
              <i className="fa-regular fa-face-smile w-6 h-6 hover:cursor-pointer text-twitter-blue"></i>
              <i className="fa-solid fa-list w-6 h-6 hover:cursor-pointer text-twitter-blue"></i>
              <i className="fa-regular fa-calendar w-6 h-6 hover:cursor-pointer text-twitter-blue"></i>
              <i className="fa-solid fa-location-dot w-6 h-6 hover:cursor-pointer text-twitter-blue"></i>
            </div>
            <button
              className="post w-[60px] bg-twitter-blue rounded-lg text-center opacity-50 text-white font-bold ml-44"
              onClick={handleTweetButtonClick} // Pass function reference
            >
              Tweet
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
