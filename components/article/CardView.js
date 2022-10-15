import Image from "next/image";
export default function CardView({ data, index }) {
  return (
    <div
      className=" w-64 h-64 rounded shadow-lg bg-orange-300 p-3 m-3 "
      key={index}
    >
      <div className="w-full h-40 bg-slate-400">
        <img
          class="w-full h-full bg-black"
          src={data.image.url}
          alt="product Image"
        ></img>
      </div>

      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">
          {data.name} {data.price}
        </div>
      </div>
    </div>
  );
}
