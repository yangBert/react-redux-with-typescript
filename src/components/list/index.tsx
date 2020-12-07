import * as React from "react"
import { useSelector, useDispatch } from "react-redux"
import { Article } from "./Article"
import { AddArticle } from "./AddArticle"
import { addArticle, removeArticle } from "./store/actions"
import { IArticle } from "./store/types"
import { RootStore } from "../../store";

const List: React.FC = () => {
  const dispatch = useDispatch();
  const listState = useSelector((state: RootStore) => state.list);
  const countState = useSelector((state: RootStore) => state.count);
  const saveArticle = React.useCallback(
    (article: IArticle) => dispatch(addArticle(article)),
    [dispatch]
  )

  return (
    <div>
      <h3>数字改变：{countState.count}</h3>
      <AddArticle saveArticle={saveArticle} />
      {listState.articles.map((article: IArticle) => (
        <Article
          key={article.id}
          article={article}
          removeArticle={removeArticle}
        />
      ))}
    </div>
  )
}

export default List