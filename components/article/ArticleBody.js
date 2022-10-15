
export default function ArticleBody({ data }) {

  return (
    <div
      contentEditable="true"
      className="mb-0 px-4 "
      dangerouslySetInnerHTML={{ __html: data.html }}
    ></div>
  )
}
