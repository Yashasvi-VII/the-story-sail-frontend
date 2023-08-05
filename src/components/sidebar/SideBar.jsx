import "./SideBar.css";
import TopPicks from "../../images/TopPicks.jpeg";

export default function SideBar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">Top Picks</span>
        <img className="sidebarImg" src={TopPicks} alt="Sidebar Image" />
        <p>
          Your Life Is Built By What You Do After Your Work Hours In your free
          time do you choose to watch Netflix or do you hone your skills? Do you
          choose to be casual or do you plan for your future? A pro always
          chooses the hard path. Because despite being difficult it’s the most
          rewarding one.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">Categories</span>
        <ul className="sidebarList">
          <li className="sidebarListItem"> Life</li>
          <li className="sidebarListItem"> Style</li>
          <li className="sidebarListItem"> Sport</li>
          <li className="sidebarListItem"> Music</li>
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">Follow us</span>
        <ul className="sidebarSocial">
          <i class="sidebarIcon fa-brands fa-facebook"></i>
          <i class="sidebarIcon fa-brands fa-instagram"></i>
          <i class="sidebarIcon fa-brands fa-twitter"></i>
          <i class="sidebarIcon fa-brands fa-youtube"></i>
        </ul>
      </div>
    </div>
  );
}
