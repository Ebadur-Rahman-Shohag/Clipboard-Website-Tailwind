import React from 'react'
import googleLogo from "../assets/images/logo-google.png"
import ibmLogo from "../assets/images/logo-ibm.png"
import microsoftLogo from "../assets/images/logo-microsoft.png"
import vectorLogo from "../assets/images/logo-vector-graphics.png"
function References() {
  return (
    <section id='references'>
        <div className=' flex flex-col items-center justify-between max-w-6xl mx-auto px-10 space-y-16 my-44 md:flex-row md:space-y-0'>
        <img src={googleLogo} alt="" />
        <img src={ibmLogo} alt="" />
        <img src={microsoftLogo} alt="" />
        <img src={vectorLogo} alt="" />
        </div>
    </section>
  )
}

export default References