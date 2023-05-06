import React from "react";
import { getEvent } from "../utils/data";
import MainEvent from "../components/MainEvent";
import JumbotronEvent from "../components/JumbotronEvent";

class Event extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      event: getEvent(),
      search: "",
      currentPage: 1,
      eventPerPage: 4,
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleNextClick = this.handleNextClick.bind(this);
    this.handlePrevClick = this.handlePrevClick.bind(this);
    this.onSearchEventHandler = this.onSearchEventHandler.bind(this);
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

  onSearchEventHandler(event) {
    this.setState(() => {
      return {
        search: event.target.value,
      };
    });
  }


  render() {
    const { search, currentPage, eventPerPage } = this.state;
    const filterEvent = this.state.event.filter((event) => {
      return event.title.toLowerCase().includes(search.toLowerCase()) || event.category.toLowerCase().includes(search.toLowerCase());
    });
    const indexOfLastEvent = currentPage * eventPerPage;
    const indexOfFirstNews = indexOfLastEvent - eventPerPage;
    const currentEvent = filterEvent.slice(indexOfFirstNews, indexOfLastEvent);
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(filterEvent.length / eventPerPage); i++) {
      pageNumbers.push(i);
    }

    return (
      <>
        <JumbotronEvent onSearch={this.onSearchEventHandler} value={this.state.search} />
        <MainEvent
          event={filterEvent}
          currentPage={currentPage}
          currentEvent={currentEvent}
          pageNumbers={pageNumbers}
          handleClick={this.handleClick}
          handleNextClick={this.handleNextClick}
          handlePrevClick={this.handlePrevClick}
        />
      </>
    );
  }
}

export default Event;
