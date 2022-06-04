import React from "react";

const NavBar = () => {
  return (
    <div>
      <nav className="main-menu">
        <div>
          <a className="logo" href="#" onClick="return false;"></a>
        </div>
        <div className="settings">
          <i className="fas fa-user-circle"></i>
        </div>
        <div className="scrollbar" id="style-1">
          <ul className="top-list">
            <li>
              <a href="#" onClick="return false;">
                <i className="fa fa-tachometer" aria-hidden="true"></i>
              </a>
            </li>

            <li>
              <a href="#" onClick="return false;">
                <i className="fa fa-file-text-o"></i>
              </a>
            </li>

            <li>
              <a href="#" onClick="return false;">
                <i className="fa fa-briefcase"></i>
              </a>
            </li>

            <li>
              <a href="#" onClick="return false;">
                <i className="fa fa-users"></i>
              </a>
            </li>

            <li>
              <a href="#" onClick="return false;">
                <i className="fa fa-gear"></i>
              </a>
            </li>
          </ul>

          <ul className="bottom-list">
            <li>
              <a href="#" onClick="return false;">
                <i className="fa fa-question-circle"></i>
              </a>
            </li>

            <li>
              <a href="#" onClick="return false;">
                <i className="fa fa-th"></i>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
