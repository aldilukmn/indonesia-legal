import React from "react";
import JumbotronNews from "../components/JumbotronNews";
import MainNews from "../components/MainNews";
import { getNews } from "../utils/data";

class News extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      news: getNews(),
      search: "",
      currentPage: 1,
      newsPerPage: 4,
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleNextClick = this.handleNextClick.bind(this);
    this.handlePrevClick = this.handlePrevClick.bind(this);
    this.onSearchNewsHandler = this.onSearchNewsHandler.bind(this);
  }

  handleClick = (event) => {
    this.setState({
      currentPage: Number(event.target.id),
    });
  };

  handlePrevClick = () => {
    this.setState({ currentPage: this.state.currentPage - 1 });
  };

  handleNextClick = () => {
    this.setState({ currentPage: this.state.currentPage + 1 });
  };

  onSearchNewsHandler(event) {
    this.setState(() => {
      return {
        search: event.target.value,
      };
    });
  }


  render() {
    const { search, currentPage, newsPerPage } = this.state;
    const filteredNews = this.state.news.filter((news) => {
      return news.title.toLowerCase().includes(search.toLowerCase()) || news.category.toLowerCase().includes(search.toLowerCase());
    });
    const indexOfLastNews = currentPage * newsPerPage;
    const indexOfFirstNews = indexOfLastNews - newsPerPage;
    const currentNews = filteredNews.slice(indexOfFirstNews, indexOfLastNews);
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(filteredNews.length / newsPerPage); i++) {
      pageNumbers.push(i);
    }

    return (
      <>
        <JumbotronNews onSearch={this.onSearchNewsHandler} value={this.state.search} />
        <MainNews
          news={filteredNews}
          currentPage={currentPage}
          currentNews={currentNews}
          pageNumbers={pageNumbers}
          handleClick={this.handleClick}
          handleNextClick={this.handleNextClick}
          handlePrevClick={this.handlePrevClick}
        />
      </>
    );
  }
}

export default News;
