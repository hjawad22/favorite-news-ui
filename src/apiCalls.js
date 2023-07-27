export function getArticles() { 
    return fetch(`https://newsapi.org/v2/everything?q=apple&from=2023-07-24&to=2023-07-24&language=en&sortBy=popularity&apiKey=2c5e444cd8bf4b6797c63207f8899bc9`)
      .then((res) => {
        if (!res.ok) {
          throw new Error('Oops! We seem to be having some technical issues, please try again later!');
        }
        return res.json();
      });
  }