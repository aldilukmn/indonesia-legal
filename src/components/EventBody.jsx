function EventBody({ handleClick, body }) {
  return (
    <div class="col-lg-9 col-md-9 col-sm-12 pb-5">
      <img class="img-fluid mb-5 shadow" src="https://storage.googleapis.com/petromindogambar/aphmet-img/img-event-detail.jpg" alt="image" />
      <p class="text-justify">{body}</p>
      <hr />
      <a onClick={handleClick}>
        <strong>Back</strong>
      </a>
    </div>
  );
}

export default EventBody;
