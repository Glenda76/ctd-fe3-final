import { useContext } from "react";
import { Link } from "react-router-dom";
import { ContextGlobal } from "./utils/global.context";
import styles from "../stylesheet/Navbar.module.css";


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const { theme, setDarkTheme, setLightTheme } = useContext(ContextGlobal);
  const darkMode = theme === "dark" || false;

  const changeTheme = () => {
    if (darkMode) {
      setLightTheme();
    } else {
      setDarkTheme();
    }
  };

  return (
    <header className="sticky-top">
    <nav
      className={`navbar navbar-expand-sm ${
        darkMode ? "navbar-dark bg-dark" : "navbar-light bg-light"
      }`}
      aria-label="Third navbar example"
    >
      <div className="container">
        <Link className={`navbar-brand ${styles.navbarBrand}`} to="/home">
          <span>
            <strong>D</strong>
          </span>
          H Odonto
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarsExample03"
          aria-controls="navbarsExample03"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarsExample03"
        >
          <ul className="navbar-nav mb-2 mb-sm-0">
            <li className={`nav-item ${styles.navBarLink}`}>
              <Link className="nav-link" to="/home">
                Home
              </Link>
            </li>
            <li className={`nav-item ${styles.navBarLink}`}>
              <Link className="nav-link" to="/Contact">
                Contact
              </Link>
            </li>
            <li className={`nav-item ${styles.navBarLink}`}>
              <Link className="nav-link" to="/favs">
                Favs
              </Link>
            </li>
            <li className={`nav-item`}>
              <button
                className={`btn btn-${darkMode ? "light" : "dark"} ${
                  styles.btnStyle
                }`}
                onClick={changeTheme}
              >
                {darkMode ? "☀️" : "🌙"}{" "}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
  )}
    <> {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
    
      </> 
  


export default Navbar