import moment from "moment";

function NewsDetail({ category, title, body, image, date, author }) {
    const format = 'dddd, MMMM DD YYYY - h:mmA';
    
    const datetimeWIB = moment.utc(date).utcOffset('+0700').format(format);
    
    return (
    <>
      <div class="container">
        <div class="row pt-5 pb-5">
          <div class="col-12">
            <nav aria-label="breadcrumb">
              <ol class="breadcrumb bg-white border-bottom px-0">
                <li class="breadcrumb-item">
                  <a href="#">Home</a>
                </li>
                <li class="breadcrumb-item">
                  <a href="#">News</a>
                </li>
                <li class="breadcrumb-item active" aria-current="page">
                  {title}
                </li>
              </ol>
            </nav>
          </div>
          <div class="Col-lg-8 col-md-8 col-sm-12">
            <h4>
              <h3>
                <strong>{title}</strong>
              </h3>
            </h4>
            <div class="col-lg-8 col-md-8 col-sm-12">
              <small class="mb-4 text-muted">{datetimeWIB}</small>
              <img class="img-fluid mt-3 shadow" src={image} alt="about image" />
            </div>

            <hr />
            <p class="text-justify">
              {body}
            </p>
            <hr />
            <small class="text-muted">By: {author}</small>
            <hr />
            <a href="news.php" class="btn btn-aph">
              <strong>Back</strong>
            </a>
          </div>
          <div class="col-lg-4 col-md-4 col-sm-12 text-justify">
            <h4>Popular News</h4>
            <hr />
            <span>
              <i class="fas fa-square"></i> Regulation
            </span>
            <h5 class="mb-4">
              <strong>Phasellus euismod quam quis est ultrices pellentesque</strong>
            </h5>
            <hr />
            <span>
              <i class="fas fa-square"></i> Event
            </span>
            <h5 class="mb-4">
              <strong>Quisque dapibus elementum libero nec lobortis</strong>
            </h5>
            <hr />
            <span>
              <i class="fas fa-square"></i> Event
            </span>
            <h5 class="mb-4">
              <strong>Vestibulum convallis quam ut mi convallis</strong>
            </h5>
          </div>
        </div>
      </div>
    </>
  );
}

export default NewsDetail;
