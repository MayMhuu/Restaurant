export default function ReadAlso({ data }) {
  return (
    <div className="grid md:grid-cols-2 mt-10 mb-8">
      {data.map((read, index) => {
        return (
          <a href={read.link} className="hover:text-red-500 max-w-s mx-4 mb-2 shadow-lg px-5" target="_self" key={index}>
            <p className="text-red-500">{read.label && read.label}</p>
            <p>{read.title}</p>
          </a>
        );
      })}
    </div>
  );
}
