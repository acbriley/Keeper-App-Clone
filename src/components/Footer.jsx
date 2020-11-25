import React from 'react';

let date = new Date;

function Footer(){
  return(
    <footer>Copyright Andrew Briley {date.getDate()}</footer>
  )
}

export default Footer;