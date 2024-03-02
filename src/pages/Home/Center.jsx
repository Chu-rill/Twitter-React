// Center.jsx
import React, { useState } from "react";
import Header from "./Header";
import Tweet from "./Tweet";
import tweeted from "../../Data/tweet";

export default function Center() {
  // Initialize state to hold tweet data
  const [tweets, setTweets] = useState(tweeted);

  // Function to add a new tweet
  const addTweet = (name, img, sub, tweet) => {
    const newTweet = { name, img, sub, tweet };
    setTweets((prevTweets) => [...prevTweets, newTweet]);
  };

  // Map through the tweet data array and render Tweet components
  const tweetComponents = tweets.map((tweetData) => <Tweet {...tweetData} />);

  return (
    <main>
      <Header />
      {tweetComponents}
    </main>
  );
}

// Export the addTweet function separately
export const addTweet = (name, img, sub, tweet, setTweets) => {
  const newTweet = {
    name: name,
    img: img,
    sub: sub,
    tweet: tweet,
  };
  // Assuming tweets is a state variable managed by useState
  setTweets((prevTweets) => [...prevTweets, newTweet]);
};
