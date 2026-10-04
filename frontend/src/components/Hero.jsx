function Hero() {
  const scrollToFoods = () => {
    document
      .getElementById("foods")
      .scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <p className="tagline">🍴 Find. Compare. Save.</p>

        <h1>
          Find Your Favourite Food
          <br />
          at the Best Price
        </h1>

        <p className="hero-text">
          Compare food prices from different platforms
          and choose the best deal for you.
        </p>

        <button className="hero-button" onClick={scrollToFoods}>
          Explore Foods
        </button>
      </div>
    </section>
  );
}

export default Hero;