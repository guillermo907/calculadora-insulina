import "../styles/navbar.css";
import userLogo from "../resources/user-logo.png";
import appLogo from "../resources/app-logo2.png";

const Navbar = ({ toggleUserSettings }) => {
  return (
    <nav className="navbar">
      <div className="left">
        <img className="app-logo" src={appLogo} />
      </div>
      <div className="right">
        <span>
          <img
            className="user-logo"
            src={userLogo}
            onClick={() => toggleUserSettings()}
          />
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
