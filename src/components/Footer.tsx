import React from 'react'


const currentYear = (new Date().getFullYear())
const yearText = currentYear === 2022 ? "2022" : "2022 - "+currentYear


export const Footer = () => {
  return (
    <footer className="footer">
    Copyright © { yearText } All rights reserved. AtsiskaitymasReact</footer>
  )
}
