import React from "react";
import "./Menu.css";
import icon from './group.png';
class Menu extends React.Component {
  state = {
    menu: [
      {
        title: "Home",
        link: "/home",
        icon: "ico-home"
      },
      {
        title: "My Network",
        link: "/network",
        icon: "ico-network"
      },
      {
        title: "Jobs",
        link: "/jobs",
        icon: "ico-jobs"
      },
      {
        title: "Messaging",
        link: "/messaging",
        icon: "ico-messaging"
      },
      {
        title: "Notifications",
        link: "/notifications",
        icon: "ico-notifications"
      },
      {
        title: "Me",
        link: "/me",
        icon: "ico-me"
      }
    ]
  };
  render() {
    return (
      <div className="col-md-7">
        <ul className="menu d-flex justify-content-between">
          {this.state.menu.map(link => {
            return (
              <li className="menu-link">
                <img src={icon} />
                <a href={link.link}>{link.title}</a>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
export default Menu;
