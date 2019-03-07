import React, { memo } from 'react';

const Footer = () => {

  return (
    <footer className="footer">

    <span className="ico ico-logo"></span>
    <span className="ico ico-social"></span>

    <div className="text-left col-left">
        <ul className="inline-block">
            <li>
                <a href="#">Terms & Conditions</a>
            </li>
            <li>
                <a href="#">Privacy Policy</a>
            </li>
            <li>
                <a href="#">About Us</a>
            </li>
            <li>
                <a href="#">Partners</a>
            </li>
        </ul>
    </div>
    <div className="text-right col-right">
        <ul className="inline-block">
            <li className="link">
                <a href="#">reservations@loscocosbungalows.com</a>
            </li>
            <li className="link">
                <a href="#">Tlf: +34 987 675 432</a>
            </li>
        </ul>
    </div>

</footer>
  );
}

export default memo(Footer);