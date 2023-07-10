import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
   <>
    <div className="d-flex footer">
                <div className="footerContent">
                    <h2>The Generics</h2>
                </div>
                <div className="d-flex justify-content-end footerIcon ">
                    <i className="fa-brands fa-square-youtube"></i>
                    <i className="fa-brands fa-spotify"></i>
                    <i className="fa-brands fa-facebook-f"></i>
                </div>
            </div>
   </>
  )
}

export default Footer
