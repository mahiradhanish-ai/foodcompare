function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-inner">

        {/* Logo */}
        <a href="#home" className="logo">
          <span className="logo-icon">🍽️</span>
          <span>Food<span className="logo-highlight">Compare</span></span>
        </a>

        {/* Navigation */}
        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#foods">Foods</a>
          <a href="#about">About</a>
        </nav>

        {/* CTA */}
        <a href="#foods" className="nav-cta">
          Explore Foods
        </a>

      </div>
    </header>
  );
}

export default Navbar;