export default function FollowPage() {
  return (
    <div className="flex mt-1 mb-5 bg-zinc-100 h-14 w-full text-justify border-t-2 border-red-700 ">
      <p className="inline-block align-middle p-2 ">
        Follow us on
        <a
          href="https://www.instagram.com/todayonline/"
          className="text-red-600 px-2"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </a>
        and
        <a
          href="https://www.tiktok.com/@todayonline"
          target="_blank"
          rel="noopener noreferrer"
          className="text-red-600 px-2"
        >
          Tiktok
        </a>
        and join our
        <a
          href="https://t.me/todayonlinesg"
          target="_blank"
          rel="noopener noreferrer"
          className="text-red-600 px-2"
        >
          Telegram
        </a>
        channel for the latest updates.
      </p>
    </div>
  );
}
