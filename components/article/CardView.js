export default function CardView({ data, index }) {
  return (
    <div
      className=" w-64 h-64 rounded shadow-lg  p-3 m-3 "
      key={index}
    >
      <div className="w-full h-40 bg-slate-400">
        <img
          class="w-full h-full bg-black rounded"
          src={data.image.url}
          alt="product Image"
        ></img>
      </div>

      <div className="px-6 py-4">
        <div className="font-bold text-lg mb-2 text-amber-800">
          {data.name} {data.price}
        </div>
        {/* <div className=" text-sm mb-2">
          {data.description}
        </div> */}
      </div>
    </div>
  );
}
