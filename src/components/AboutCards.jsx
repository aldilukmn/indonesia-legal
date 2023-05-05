function AboutCards({ supervisory }) {
  return (
    <div class="container">
      <div class="row pt-5 pb-5 mx-5">
        {supervisory.map((supervisory) => (
          <div key={supervisory.id} {...supervisory} class="col-lg-4 col-md-4">
            <div class="card mb-3">
              <img src={supervisory.image} alt={supervisory.name} style={{ width: "100%", height: "300px", objectFit: "cover"}}/>
              <div class="card-body">
                <h4 class="card-title">
                  <strong>{supervisory.name}</strong>
                </h4>
                <p class="card-text">
                  <em>
					{supervisory.job}
                  </em>
                </p>
                <hr />
                <p class="card-text card-text-custom">{supervisory.body}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AboutCards;
