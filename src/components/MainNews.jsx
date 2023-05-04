import { FaSearch } from "react-icons/fa";

function MainNews() {
  return (
    <>
      <div class="container-fluid bg-warning">
        <div class="container">
          <div class="row pt-3">
            <div class="col-12">
              <div class="input-group mb-3 mx-auto">
                <input type="text" class="form-control form-control-lg" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2" />
                <button class="btn btn-lg btn-primary text-white shadow" type="button" id="button-addon2">
                  <FaSearch /> Button
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MainNews;
