import React from "react";

function Footer() {
  var date = new Date();
  var Year = date.getFullYear();
  return (
    <footer>
      <p>copyright {Year}</p>
    </footer>
  );
}

export default Footer;
