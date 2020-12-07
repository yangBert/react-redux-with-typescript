import { IArticle, ArticleAction, ADD_ARTICLE, REMOVE_ARTICLE, DispatchType } from "./types"

export function addArticle(article: IArticle) {
  const action: ArticleAction = {
    type: ADD_ARTICLE,
    article,
  }

  return simulateHttpRequest(action)
}

export function removeArticle(article: IArticle) {
  const action: ArticleAction = {
    type: REMOVE_ARTICLE,
    article,
  }
  return simulateHttpRequest(action)
}

export function simulateHttpRequest(action: ArticleAction) {
  return (dispatch: DispatchType) => {
    setTimeout(() => {
      dispatch(action)
    }, 500)
  }
}