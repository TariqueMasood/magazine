export const getArticles = async () => {
  const url =
    "https://newsapi.org/v2/top-headlines?country=in&apiKey=d4c18cd8be8d4b05886252163b8aa126";
  const data = await fetch(url);

  const res = await data.json();

  console.log(res);
  return res;
};
