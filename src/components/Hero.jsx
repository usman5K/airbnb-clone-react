import imageGrid from "/photo-grid.png";

function Hero() {
  return (
    <section className="hero">
      <img className="hero--image-grid" src={imageGrid} />
      <h1 className="hero--heading">Online Experiences</h1>
      <p className="hero--description">
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
    </section>
  );
}

export default Hero;
