import Image from "next/image";

export default function SideBar({ data }) {
  return (
    <>
      <p className="text-black font-bold text-m"> {data.layoutConfig.title}</p>
      {data.items.map((item, index) => {
        return (
          <>
            <div className="flex pb-4" key={index}>
              <div className="w-1/5 h-1/2">
                <Image
                  alt="Hero Image"
                  src={item.image}
                  width="100%"
                  height="100%"
                />
              </div>
              <div className="w-4/5 h-1/3 pl-3">
                <a className="text-sm md:text-xxs font-bold italic" href={item.url}>
                  {item.title}
                </a>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
}
