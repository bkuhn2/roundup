export const getArticles = (section) => {
  return fetch(`https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=DkkpTdysLWbQqND5gWNN8vo7Pr42P28X`)
    .then(res => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error(`${res.status} Error getting articles!`)
      }
    })
}