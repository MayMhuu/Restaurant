import Image from "next/image";

export default function Subscribe({ data }) {
  const checkedBundleType = (key) => {
    if (key === "spotlight") {
      const articel = data.find((element) => element.bundle === key);
      return (
        <a
          href={articel.view_more.url}
          target="_blank"
          rel="noopener noreferrer"
          className="max-w-xs min-w-fit mx-4 mb-2 shadow-lg "
        >
          <Image
            src={articel.hero_media.media_image}
            alt="hero_image"
            width="100%"
            height="100%"
            layout="responsive"
            className="w-full h-full object-cover bg-center bg-no-repeat"
          />
        </a>
      );
    } else if (key === "newsletter_subscription") {
      const articel = data.find((element) => element.bundle === key);
      return (
        <>
          <div className="px-6 py-4 bg-red-500 text-center">
            <h4 className=" font-bold text-white tracking-tight">{articel.title}</h4>
          </div>

          <div className="flex items-center pb-4 pt-4">
            <div className="w-1/2">
              <div
                className=" pl-3 text-xxs text-gray-700 font-medium italic"
                dangerouslySetInnerHTML={{ __html: articel.body }}
              ></div>
            </div>
            <Image
              alt="sub_image"
              src={articel.newsletter_image}
              width="100%"
              height="100%"
              className="w-1/2"
            />
          </div>

          <div className="px-6 py-4">
            <div className="flex flex-row">
              <div>
                <input
                  type="email"
                  id="email"
                  className="border focus:outline-none focus:ring-2 focus:ring-gray-100 focus:border-transparent text-gray-900 text-sm  focus:border-red-500 block w-full p-2.5 "
                  placeholder="Enter your email address"
                />
              </div>
              <div>
                <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 ">
                  SUBSCRIBE
                </button>
              </div>
            </div>
            <p className="text-xxs italic">{articel.sub_description}</p>
          </div>
        </>
      );
    }
  };

  return (
    <div className="grid md:grid-cols-2 mt-10">
      <div className="max-w-s mx-4 mb-2 shadow-lg">
        {checkedBundleType("newsletter_subscription")}
      </div>
      {checkedBundleType("spotlight")}
    </div>
  );
}
