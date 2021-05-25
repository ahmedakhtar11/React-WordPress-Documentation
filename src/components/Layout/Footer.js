import React from 'react'

export default function Footer() {
    return (
        <div>
        <footer style = {footerStyle} className='footer mt-auto py-3 text-white'>
        <div style = {footerinfoStyle} className='container'>meShare Documentation</div>
      </footer>
        </div>
    )
}

const footerStyle = {
    color: 'white',
    fontWeight: 'bolder',
    display: "flex",
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
    fontSize: "18px",
    fontFamily: "Arial",
    background: "#D76C78"
}

const footerinfoStyle = {
    color: 'white',
    fontWeight: 'bolder',
    display: "flex",
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
    fontSize: "18px",
    fontFamily: "Arial",
}

