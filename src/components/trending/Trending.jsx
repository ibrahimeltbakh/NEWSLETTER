import { v4 as uuidv4 } from "uuid";
import Card3 from "../cards/card3(trending)/Card3";
const Trending = ({ news }) => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "20px",
      }}>
      <div style={{ textAlign: "center", color: "#04594D", width: "100%" }}>
        <h2>Trending</h2>
      </div>
      <div>
        {news.map((item, index) => {
          if (index % 2 != 0 && item.urlToImage != null) {
            return (
              <div
                key={uuidv4()}
                style={{
                  borderBottom: "2px solid #888",
                  marginBottom: "10px",
                }}>
                <Card3
                  imgSrc={item.urlToImage}
                  title={item.title}
                  author={item.author}
                  date={item.publishedAt}
                  description={item.description || "No Description"}
                />
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Trending;
