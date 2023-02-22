export const formatRawData = (data) => {

  const titledData = data.results.filter(result => result.title);

  return titledData.map((article, index) => {
    return {
      title: article.title,
      abstract: article.abstract,
      url: article.url,
      id: article.short_url.split('https://nyti.ms/')[1],
      byAuthor: article.byline,
      publishedDate: article.published_date, //may want to format this differently
      descriptors: article.des_facet.map(des => des.toLowerCase()).join(' '),
      img: article.multimedia.find(pic => pic.format === 'Super Jumbo').url,
      imgCaption: article.multimedia.find(pic => pic.format === 'Super Jumbo').caption,
      section: data.section
    }
  });
}