import Logo from "/airbnb-logo.png";

function Navbar() {
  return (
    <nav className="navbar">
      <img className="navbar--logo" src={Logo} />
    </nav>
  );
}

export default Navbar;
