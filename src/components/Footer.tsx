import React from 'react'


const currentYear = (new Date().getFullYear())
const yearTxt = currentYear === 2022 ? "2022" : "2022 - "+currentYear


export const Footer = () => {
  return (
    <footer className="footer">
    Copyright © { yearTxt } All rights reserved. AtsiskaitymasReact</footer>
  )
}
