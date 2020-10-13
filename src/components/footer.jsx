import React from "react";

function Footer(){
  var year= new Date().getFullYear();

  return(
    <footer>
    <h4>Made by <a href="https://www.instagram.com/developer_dev/?hl=en" rel='noreferrer' target="_blank" >Chandrasekhar </a></h4>
    <p>Copyright &#169; {year}</p>
    </footer>
  );
}

export default Footer;
