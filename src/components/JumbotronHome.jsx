import { FaSearch } from "react-icons/fa";

function JumbotronHome() {
  return (
    <div className="jumbotron_home jumbotron jumbotron-fluid">
      <div className="container">
        <h3 className="display-7 text-white text-center">Most Trusted Portal for Legal Professionals of Indonesia</h3>
        <hr className="mb-5" />
        <div class="input-group mb-3 mx-auto">
          <input type="text" class="form-control form-control-lg" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2" />
          <button class="btn btn-lg btn-primary text-white shadow" type="button" id="button-addon2">
            <FaSearch/> Button
          </button>
        </div>
      </div>
    </div>
  );
}

export default JumbotronHome;
