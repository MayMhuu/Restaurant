import Image from "next/image";

export default function ByLine({ data }) {
  return (
    <>
      {data.map((detail, index) => {
        return (
          <div className="flex items-center pb-4" key={index}>
            <Image
              alt="Hero Image"
              src={detail.hero_media.thumbnail}
              width="50%"
              height="50%"
              className="rounded-full"
            />
            <div>
              <a className="pl-3 font-medium italic" href={detail.url}>By {detail.title}</a>
            </div>
          </div>
        );
      })}
    </>
  );
}
