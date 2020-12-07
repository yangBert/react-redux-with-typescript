import * as React from "react"
import { IArticle } from "./store/types"

type Props = {
  saveArticle: (article: IArticle) => void
}

export const AddArticle: React.FC<Props> = ({ saveArticle }) => {
  const [article, setArticle] = React.useState<IArticle | {}>({})
  const handleArticleData = (e: React.FormEvent<HTMLInputElement>) => {
    setArticle({
      ...article,
      [e.currentTarget.id]: e.currentTarget.value,
    })
  }

  const addNewArticle = (e: React.FormEvent) => {
    e.preventDefault()
    if (("title" in article && "body" in article) && (article.title) && article.body) {
      saveArticle(article)
    } else {
      alert("please enter title and body")
    }
  }

  return (
    <form onSubmit={addNewArticle} className="Add-article">
      <input
        type="text"
        id="title"
        placeholder="Title"
        onChange={handleArticleData}
      />
      <input
        type="text"
        id="body"
        placeholder="Description"
        onChange={handleArticleData}
      />
      <button>
        Add article
      </button>
    </form>
  )
}