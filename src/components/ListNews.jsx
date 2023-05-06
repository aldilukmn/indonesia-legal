import { Link } from "react-router-dom";

function ListNews({currentNews }) {
  return (
    <>
      {currentNews.map((news) => (
        <>
          <div class="col-lg-4 col-md-4 col-sm-12">
            <img class="img-fluid mb-5 shadow" src={news.image} alt="image" />
          </div>
          <div class="col-lg-8 col-md-8 col-sm-12">
            <span style={{ font: "14px" }}>{news.category}</span>
            <h4 class="mb-4">
              <strong>{news.title}</strong>
            </h4>
            <p class="card-text">
              {news.body.substring(0, 220)}... <Link to={`/news/${news.id}`}>Show more</Link>
            </p>
          </div>
        </>
      ))}
    </>
  );
}

export default ListNews;