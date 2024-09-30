import { newsItems } from "../../data/newsData";
import "./news.css";

const News = () => {
  return (
    <>
      <h1>Latest News</h1>
      <div className="news_container">
        {newsItems.map((item) => (
          <div key={item.id} className="news_card">
            <img src={item.image} alt={item.title} />
            <div className="news_content">
              <h2>{item.title}</h2>
              <p>{item.description}</p>
              <span className="news_date">{item.date}</span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default News;
