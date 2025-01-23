import axios from "axios";
// import NewsModule from "./NewsModul";
const NewsController = async () => {
    try {
        const response = await axios.get(
            "https://newsapi.org/v2/top-headlines?country=us&apiKey=0e3c0acead0c49769847717b342a67a1"
        );
        return response.data.articles;

        // let articles =  response.data.articles.map((article) => new NewsModule(article.title, article.description, article.urlToImage))
        // return articles
    } catch (e) {
        console.error("Error fetching news:", e);
    }
};
export default NewsController;
