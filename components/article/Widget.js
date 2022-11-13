import {
  FacebookMessengerShareButton,
  ViberShareButton,
  TelegramShareButton,
  FacebookShareButton,
} from "react-share";
import {
  FacebookMessengerIcon,
  ViberIcon,
  TelegramIcon,
  FacebookIcon,
} from "react-share";

export default function Widget({ url }) {

  return (
    <div className="flex flex-row mt-3 space-x-4">
      <div className="text-center px-1 py-2 ">
        <TelegramShareButton
          url={url}
          className="Demo__some-network__share-button"
        >
          <TelegramIcon size={30} round />
        </TelegramShareButton>
      </div>
      <div className="text-center px-1 py-2 ">
        <ViberShareButton
          url={url}
          className="Demo__some-network__share-button"
        >
          <ViberIcon size={30} round iconFillColor="white" />
        </ViberShareButton>
      </div>
      <div className="text-center px-1 py-2 ">
        <button
          onClick={() => {
            window.location.href =
              "fb-messenger://share?link=" +
              encodeURIComponent(url) +
              "&app_id=" +
              encodeURIComponent(123123123);
          }}
        >
          <FacebookMessengerIcon size={30} round />
        </button>
      </div>
      <div className="text-facebook text-center px-1 py-2 ">
        <FacebookShareButton
          url={url}
          className="Demo__some-network__share-button"
        >
          <FacebookIcon size={30} round />
        </FacebookShareButton>
      </div>
    </div>
  );
}
