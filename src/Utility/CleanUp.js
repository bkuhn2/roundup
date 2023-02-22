export const formatRawData = (data) => {

  const titledData = data.results.filter(result => result.title);

  return titledData.map((article) => {
    return {
      title: article.title,
      abstract: article.abstract,
      url: article.url,
      id: article.short_url ? article.short_url.split('https://nyti.ms/')[1] : article.uri.split('nyt://article/')[1],
      byAuthor: article.byline,
      publishedDate: article.published_date, 
      descriptors: article.des_facet.map(des => des.toLowerCase()).join(' '),
      img: article.multimedia.find(pic => pic.format === 'Super Jumbo').url,
      imgCaption: article.multimedia.find(pic => pic.format === 'Super Jumbo').caption,
      section: data.section
    }
  });
}