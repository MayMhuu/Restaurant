
export default function ArticleBody({ data }) {

  return (
    <div
      contentEditable="true"
      className="mb-0 px-4 articel-style"
      dangerouslySetInnerHTML={{ __html: data.body }}
    ></div>
  );
}
