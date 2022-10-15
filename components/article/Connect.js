import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faFacebookMessenger,
} from "@fortawesome/free-brands-svg-icons";
import TelegramWidget from "./TelegramWidget";
import {
  FacebookMessengerShareButton,
  FacebookShareButton,
  TelegramShareButton,
} from "react-share";
import {
  FacebookMessengerIcon,
  FacebookIcon,
  ViberIcon,
  TelegramIcon,
} from "react-share";

export default function Connect({ url }) {

  return (
    <div className="flex flex-row mt-3">
      <div className="text-center px-1 py-2 ">
        <TelegramWidget url={url} />
      </div>
      <div className="text-center px-1 py-2 ">
        <FacebookMessengerShareButton url={url} appId="123123123">
          <FacebookMessengerIcon size={30} round className="shadow-lg" />
        </FacebookMessengerShareButton>
      </div>
      <div className="text-facebook text-center px-1 py-2 ">
        <a
          href="https://www.facebook.com/"
          target="_blank"
          className="w-full"
          rel=" noopener noreferrer"
        >
          <FontAwesomeIcon icon={faFacebook} size="xl" />
        </a>
      </div>

      <div className="text-center px-1 py-2 ">
        <button
          onClick={() => {
            window.location.href =
              "fb-messenger://share?link=" +
              encodeURIComponent(`https://myurl`) +
              "&app_id=" +
              encodeURIComponent(123123123);
          }}
        >
          <FacebookMessengerIcon size={32} round />
        </button>
      </div>
      <div className="text-center px-1 py-2 ">
        <TelegramShareButton
          url={url}
          className="Demo__some-network__share-button"
        >
          <TelegramIcon size={32} round />
        </TelegramShareButton>
      </div>
    </div>
  );
}
