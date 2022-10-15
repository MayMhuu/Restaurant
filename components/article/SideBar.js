import Image from "next/image";

export default function SideBar({ data }) {
  return (
    <>
      {/* <p className="text-black font-bold text-m"> {data.name}</p> */}
      {data.map((item, index) => {
        return (
          <div key={index}>
            <p className="text-black font-bold text-m"> {item.name}</p>
            <div className="flex pb-4">
              <div className="w-1/5 h-1/2">
                <Image
                  alt="Hero Image"
                  src={item.image.url}
                  width="100%"
                  height="100%"
                />
              </div>
              <div className="w-4/5 h-1/3 pl-3">
                <div
                  dangerouslySetInnerHTML={{ __html: item.label.html }}
                  contentEditable="true"
                ></div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
