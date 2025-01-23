import Card4 from "../cards/card4(without img)/Card4";
import Card1 from "../cards/Card1/Card1";
import Card2 from "../cards/card2/Card2";
import Card3 from "../cards/card3(trending)/Card3";


const Hero = ({ news }) => {
  return (
    <div
      style={{
        display: "flex",
        maxWidth: "1240px",
        height: "500px",
      }}>
      <div
        style={{
          width: "50%",
          display: "flex",
          gap: "20px",
          flexDirection: "column",
          padding: "20px",
          backgroundColor: "white",
        }}>
        <div
          style={{
            height: "60%",
          }}>
          <Card1
            imgSrc={news[0]?.urlToImage}
            title={news[0]?.title}
            author={news[0]?.author || "Unknown"}
            date={news[0]?.publishedAt || "Unknown Date"}
            description={news[0]?.description || "No description"}
          />
        </div>
        <div
          style={{
            height: "25%",
          }}>
          <Card4
            imgSrc={news[1]?.urlToImage}
            title={news[1]?.title}
            author={news[1]?.author || "Unknown"}
            date={news[1]?.publishedAt || "Unknown Date"}
            description={news[1]?.description || "No description"}
          />
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "50%",
          gap: "40px",
          backgroundColor: "#fff",
        }}>
        <div>
          <Card2
            imgSrc={news[2]?.urlToImage}
            title={news[2]?.title}
            author={news[2]?.author || "Unknown"}
            date={news[2]?.publishedAt || "Unknown Date"}
            description={news[2]?.description || "No description"}
          />
        </div>
        <div>
          <Card3
            imgSrc={news[3]?.urlToImage}
            title={news[3]?.title}
            author={news[3]?.author || "Unknown"}
            date={news[3]?.publishedAt || "Unknown Date"}
            description={news[3]?.description || "No description"}
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
