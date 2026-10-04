function FoodCard({ food }) {
  const openLink = (url) => {
    if (!url) return;

    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="food-card">
      <div className="food-image">
        {food.image ? (
          <img src={food.image} alt={food.name} />
        ) : (
          <div className="image-placeholder">🍽️</div>
        )}
      </div>

      <div className="food-info">
        <div className="food-title-row">
          <h3>{food.name}</h3>
          <span className="rating">⭐ {food.rating}</span>
        </div>

        <p className="description">{food.description}</p>

        <p className="restaurant">
          🏪 {food.restaurant}
        </p>

        <div className="price-box">
          <div className="price-row our-price">
            <span>Our Price</span>
            <strong>₹{food.ourPrice}</strong>
          </div>

          <div
            className="price-row"
            onClick={() => openLink(food.zomatoUrl)}
            style={{
              cursor: food.zomatoUrl ? "pointer" : "default",
            }}
          >
            <span>🔴 Zomato</span>
            <strong>₹{food.zomatoPrice ?? "N/A"}</strong>
          </div>

          <div
            className="price-row"
            onClick={() => openLink(food.swiggyUrl)}
            style={{
              cursor: food.swiggyUrl ? "pointer" : "default",
            }}
          >
            <span>🟠 Swiggy</span>
            <strong>₹{food.swiggyPrice ?? "N/A"}</strong>
          </div>
        </div>

        <button className="details-button">
          View Details
        </button>
      </div>
    </div>
  );
}

export default FoodCard;