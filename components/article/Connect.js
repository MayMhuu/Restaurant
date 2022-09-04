import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import TelegramWidget from "./TelegramWidget";

export default function Connect({url}) {
  return (
    <div className="flex flex-row mt-3">
      <div className="text-center px-1 py-2 ">
        <TelegramWidget url={url} />
      </div>
      <div className="text-facebook text-center px-1 py-2 ">
        <a href="https://www.facebook.com/" target="_blank" className="w-full" rel=" noopener noreferrer">
          <FontAwesomeIcon icon={faFacebook} size="xl" />
        </a>
      </div>
    </div>
  );
}
