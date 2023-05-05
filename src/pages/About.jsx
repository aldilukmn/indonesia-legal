import React from "react";
import JumbotronAbout from "../components/JumbotronAbout";
import { getSupervisory } from "../utils/data";

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      supervisory: getSupervisory(),
    };
  }

  render() {
    return (
      <div className="about">
        <JumbotronAbout supervisory={this.state.supervisory} />
      </div>
    );
  }
}

export default About;
