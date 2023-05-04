import { useLocation } from "react-router-dom";
import AboutDetails from "../components/AboutDetails";
import AboutCards from "../components/AboutCards";

function JumbotronAbout() {
  let location = useLocation();
  let text;
  let main;
  if (location.pathname === "/aboutus") {
    text = "ABOUT US";
    main = <AboutDetails />;
  } else if (location.pathname === "/supervisoryboard") {
    text = "SUPERVISORY BOARD";
    main = <AboutCards />;
  }
  return (
    <>
      <div className="jumbotron_about jumbotron jumbotron-fluid">
        <div className="jumbotron_image"></div>
        <div className="container">
          <h3 className="display-7 text-white text-center">{text}</h3>
          <hr />
        </div>
      </div>
      {main}
    </>
  );
}

export default JumbotronAbout;
