// react
import React, { memo } from 'react';

const Nav = () => {

  return (
    <nav className="navbar navbar-fixed-top text-center">
      <div className="container-fluid">
        <div className="navbar-header">
        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand visible-xs-block" href="index.html">
                <img src="images/cocos/logo_mobile.png" alt="LosCocos" height="36"/>
            </a>
        </div>

        <div id="navbar" className="navbar-collapse collapse">
            <ul className="nav navbar-nav">
                <li><a href="#">Home</a></li>
                <li><a href="#">Rooms</a></li>
                <li><a href="#">Restaurant</a></li>

                <li className="hidden-xs">
                    <a href="index.html">
                        <img src="images/cocos/logo.png" alt="LosCocos" height="36"/>
                    </a>
                </li>

                <li><a href="#">Weddings</a></li>
                <li><a href="#">Membership</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </div>
      </div>
    </nav>
  );
}

export default memo(Nav);