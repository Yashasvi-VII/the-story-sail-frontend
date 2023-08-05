import { Link } from "react-router-dom";
import "./NavBar.css";

export default function navbar() {
  return (
    <div className="top">
      <div className="topleft"></div>
      <div className="topcenter">
        <ul className="toplist">
          <li className="topListItem">
            <Link className="link" to="/">
              HOME
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/create">
              WriterSpace
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to={`/edit/${22}`}>
              EditorRoom
            </Link>
          </li>
        </ul>
      </div>
      <div className="topright">
        <i class="topIcon right fa-brands fa-facebook"></i>
        <i class="topIcon right fa-brands fa-instagram"></i>
        <i class="topIcon right fa-brands fa-twitter"></i>
        <i class="topIcon right fa-brands fa-snapchat"></i>
      </div>
    </div>
  );
}
