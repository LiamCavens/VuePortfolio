import React    from "react";
import navbarJsx from "./NavBar.jsx";

class NavBar extends React.Component {
  render() {
    return navbarJsx.call(this);
  }
}

export default NavBar;
