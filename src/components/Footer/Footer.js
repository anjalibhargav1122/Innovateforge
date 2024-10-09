import React from 'react'
import Container from 'react-bootstrap/Container'
import pic from "../../assets/pic.svg"
import "./Footer.css"

const Footer = () => {
  return (
    <div>
        <Container className='bg-light d-flex align-items-center flex-column pt-5 pb-5' fluid>
<p className='text-secondary mb-0'>Powered By

</p><div className='wdim '><img src={pic} className='w-100 h-100'/></div>
        </Container>
    </div>
  )
}

export default Footer