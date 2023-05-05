import React from "react";
import { useParams } from "react-router-dom";
import { getNews } from "../utils/data";
import NewsDetail from "./NewsDetail";

function MainNewsDetailWrapper() {
  const { id } = useParams();

  return <MainNewsDetail id={Number(id)} />;
}

class MainNewsDetail extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      news: getNews(props.id),
    };
  }
  render() {
    if (this.state.news === null) {
      return <p>News not found!</p>;
    }
    return (
      <>
        <NewsDetail {...this.state.news} />
      </>
    );
  }
}

export default MainNewsDetailWrapper;
