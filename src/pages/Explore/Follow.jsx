import tweet from "../../Data/tweet";
import People from "./People";
export default function Follow() {
  let people = tweet.map((tweet) => {
    return (
      <>
        <People {...tweet} />
      </>
    );
  });
  return (
    <main className="bg-gray-100 rounded-xl h-[350px] w-[95%] mx-auto mt-2 p-2 dark:bg-inherit">
      <div className="pt-2 pl-3 space-y-8">
        <h1 className="font-extrabold mb-4">Who to Follow</h1>
      </div>
      {people}
    </main>
  );
}
