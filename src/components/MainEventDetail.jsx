import React from "react";
import { useParams } from "react-router-dom";
import { getEvent } from "../utils/data";
import EventDetail from "./EventDetail";

function MainEventDetailWrapper({ handleClick }) {
  const { id } = useParams();

  return <MainEventDetail id={Number(id)} handleClick={handleClick} />;
}

class MainEventDetail extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      event: getEvent(props.id),
    };
  }

  render() {
    if (this.state.news === null) {
      return <p>News not found!</p>;
    }

    const { handleClick } = this.props;

    return (
      <>
        <EventDetail {...this.state.event} handleClick={handleClick} agenda={this.state.event.agenda}/>
      </>
    );
  }
}

export default MainEventDetailWrapper;
