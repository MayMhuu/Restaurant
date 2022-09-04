export default function TaggedTopic({ data }) {
  const link =' https://www.todayonline.com/'
  return (
    <>
      <p className="text-black font-bold">RELATED TOPICS</p>
      <div className="grid md:grid-cols-6 mt-10 mb-8 text-center">
        {data.map((item, index) => {
          return (
            <a
              className="h-10 pt-3 text-center max-w-xxs mx-2 mb-2 shadow-lg px-3 text-xxs uppercase border-2 border-slate-300"
              target="_blank"
              rel="noopener noreferrer"
              href={link+item.link}
              key={index}
            >
             <span> {item.name}</span>
            </a>
          );
        })}
      </div>
    </>
  );
}
