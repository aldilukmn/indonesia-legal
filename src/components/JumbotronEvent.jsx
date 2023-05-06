import { FaSearch } from "react-icons/fa";

function JumbotronEvent({ value, onSearch }) {
  return (
    <>
      <div className="jumbotron_news jumbotron jumbotron-fluid">
        <div className="container">
          <h3 className="display-7 text-white text-center">EVENT</h3>
          <hr />
        </div>
      </div>
      <div class="container-fluid bg-warning">
        <div class="container">
          <div class="row pt-3">
            <div class="col-12">
              <div class="input-group mb-3 mx-auto">
                <input type="text" class="form-control form-control-lg" placeholder="Search what you want ..." value={value} onChange={onSearch} />
                <button class="btn btn-lg btn-primary text-white shadow" type="button" id="button-addon2">
                  <FaSearch /> Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default JumbotronEvent;
