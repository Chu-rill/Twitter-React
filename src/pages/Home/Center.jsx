// import { useState } from "react";
// import Header from "./Header";
// import Tweet from "./Tweet";
// import tweeted from "../../Data/tweet";
// export default function Center() {
//   const [tweet, setTweet] = useState([Tweet]);

//   let tweets = tweeted.map((tweet) => {
//     return (
//       <>
//         <tweet {...tweet} />
//       </>
//     );
//   });
//   return (
//     <main>
//       <Header />
//       {tweets}
//     </main>
//   );
// }
import { useState } from "react";
import Header from "./Header";
import Tweet from "./Tweet";
import tweeted from "../../Data/tweet";

export default function Center() {
  // Initialize state to hold tweet data
  const [tweets, setTweets] = useState(tweeted);

  // Map through the tweet data array and render Tweet components
  const tweetComponents = tweets.map((tweetData) => <Tweet {...tweetData} />);

  return (
    <main>
      <Header />
      {tweetComponents}
    </main>
  );
}
