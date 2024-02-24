import notif from "../../Data/notif";
import Msg from "./Msg";
export default function Message() {
  let notifi = notif.map((notif) => {
    return (
      <>
        <Msg {...notif} />
      </>
    );
  });
  return (
    <main className="h-full border-r-2 border-gray-200 p-3">
      <h1 className="font-extrabold mt-2 text-2xl mb-2">Notification</h1>
      <div className="flex justify-between">
        <p>All</p>
        <p>verified</p>
        <p>Mentions</p>
      </div>
      {notifi}
    </main>
  );
}
