import { useEffect } from "react";
import { useState } from "react";
import NewsController from "./NewsController";

import Hero from "../Hero/Hero";
import Latest from "../Latest/Latest";
import Trending from "./../trending/Trending";

const NewsList = () => {
  const [news, setNews] = useState([]);
  const [loading, setloading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    async function fetchData() {
      try {
        let MyNews = await NewsController();
        setNews(MyNews);
        setloading(false);
      } catch (error) {
        console.log(Error, error);
        setError(error);
        setloading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }
  if (error) {
    return <h1>Sorry Somthing Wrong!!!!</h1>;
  }
  let heroNews = news.slice(0, 4);
  let remainingNews = news.slice(4);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "30px",
      }}>
      <Hero news={heroNews} />
      <div style={{ display: "flex", gap: "20px" }}>
        <div className="latest" style={{ width: "60%" }}>
          <Latest news={remainingNews} />
        </div>
        <div
          className="trending"
          style={{ width: "410px", backgroundColor: "#fff", padding: "10px" }}>
          <Trending news={remainingNews} />
        </div>
      </div>
    </div>
  );
};

export default NewsList;
