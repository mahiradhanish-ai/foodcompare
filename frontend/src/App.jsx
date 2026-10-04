import { useEffect, useState } from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FoodCard from "./components/FoodCard";

function App() {
  const [foods, setFoods] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchFoods = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/foods");

        if (!response.ok) {
          throw new Error("Failed to fetch foods");
        }

        const data = await response.json();

        setFoods(data);
      } catch (err) {
        console.error(err);
        setError("Unable to load foods");
      } finally {
        setLoading(false);
      }
    };

    fetchFoods();
  }, []);

  return (
    <div className="app">

      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section id="home">
        <Hero />
      </section>

      {/* Food Section */}
      <section id="foods" className="food-section">

        <div className="section-heading">
          <span className="section-tag">DISCOVER & COMPARE</span>

          <h2>Find Your Perfect Food</h2>

          <p>
            Compare food prices across platforms and choose
            the best deal for your favorite meal.
          </p>
        </div>

        {/* Loading */}
        {loading && (
          <div className="status-message">
            Loading delicious foods...
          </div>
        )}

        {/* Error */}
        {!loading && error && (
          <div className="status-message error">
            {error}
          </div>
        )}

        {/* Food Cards */}
        {!loading && !error && foods.length > 0 && (
          <div className="food-grid">
            {foods.map((food) => (
              <FoodCard
                key={food._id}
                food={food}
              />
            ))}
          </div>
        )}

        {/* No Foods */}
        {!loading && !error && foods.length === 0 && (
          <div className="status-message">
            No foods available yet.
          </div>
        )}

      </section>

      {/* About Section */}
      <section id="about" className="about-section">

        <div className="about-content">

          <span className="section-tag">
            ABOUT FOODCOMPARE
          </span>

          <h2>
            One Place.
            <br />
            Better Food Decisions.
          </h2>

          <p>
            FoodCompare helps you discover delicious food and
            compare prices from different platforms before
            making your choice.
          </p>

        </div>

      </section>

      {/* Footer */}
      <footer className="footer">
        <p>
          © 2026 FoodCompare. Made with ❤️ for food lovers.
        </p>
      </footer>

    </div>
  );
}

export default App;