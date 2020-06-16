import React    from "react";
import headerJsx from "./Header.jsx";

class Header extends React.Component {
  render() {
    return headerJsx.call(this);
  }
}

export default Header;
