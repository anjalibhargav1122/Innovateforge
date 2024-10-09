import React from 'react'
import Header from '../components/navbar/Header'
import Container from 'react-bootstrap/Container'
import "./Page.css"
import Footer from '../components/Footer/Footer'
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import TextField from '@mui/material/TextField';
import rob from "../assets/rob.png"
import time from "../assets/time.webp"


const Page = () => {

  const countries = [
    {
      value: 'Afghanistan'
    },
    {
      value: 'Aland Islands'
    },
    {
      value: 'Albania'
    },
    {
      value: 'Algeria'
    },
    {
      value: 'American Samoa'
    },
    {
      value: 'Andorra'
    },
    {
      value: 'Angola'
    },
    {
      value: 'Anguilla'
    },
    {
      value: 'Antarctica'
    },
    {
      value: 'Antigua and Barbuda'
    },
    {
      value: 'Argentina'
    },
    {
      value: 'Armenia'
    },
    {
      value: 'Aruba'
    },
    {
      value: 'Ascension Island'
    },
    {
      value: 'Australia'
    },
    {
      value: 'Austria'
    },
    {
      value: 'Azerbaijan'
    },
    {
      value: 'Bahamas'
    },
    {
      value: 'Bangladesh'
    },
    {
      value: 'Botswana'
    },
    {
      value: 'Brazil'
    },
    {
      value: 'British Indian Ocean Territory'
    },
    {
      value: 'Burundi'
    },
    {
      value: 'Cambodia'
    },
    {
      value: 'Canada'
    },
    {
      value: 'Central African Republic'
    },
    {
      value: 'China'
    },
    {
      value: 'Chile'
    },
    {
      value: 'Christmas Island'
    },
    {
      value: 'Colombia'
    },
    {
      value: 'Dominican Republic'
    },
    {
      value: 'Egypt'
    },
    {
      value: 'East Timor'
    },
    {
      value: 'Ethiopia'
    },
    {
      value: 'Eritrea'
    },
    {
      value: 'Fiji'
    },
    {
      value: 'Faroe Islands'
    },
    {
      value: 'Finland'
    },
    {
      value: 'France'
    },
    {
      value: 'French Guiana'
    },
    {
      value: 'Germany'
    },
    {
      value: 'Greenland'
    },
    {
      value: 'Gambia'
    },
    {
      value: 'Ghana'
    },
    {
      value: 'Greece'
    },
    {
      value: 'Guyana'
    },
    {
      value: 'Haiti'
    },
    {
      value: 'Hong kong'
    },
    {
      value: 'Hungary'
    },
    {
      value: 'Honduras'
    },
    {
      value: 'India'
    },
    {
      value: 'Iceland'
    },
    {
      value: 'Iraq'
    },
    {
      value: 'Ireland'
    },
    {
      value: 'Israel'
    },
    {
      value: 'Italy'
    },
    {
      value: 'Japan'
    },
    {
      value: 'Jersey'
    },
    {
      value: 'Kenya'
    },
    {
      value: 'Kiribati'
    },
    {
      value: 'Kosovo'
    },
    {
      value: 'Korea, Republic of (South Korea)'
    },
    {
      value: 'Kuwait'
    },
    {
      value: 'Kyrgyzstan'
    },
    {
      value: 'Laos'
    },
    {
      value: 'Latvia'
    },
    {
      value: 'Liberia'
    },
    {
      value: 'Libya'
    },
    {
      value: 'Macau'
    },
    {
      value: 'Malawi'
    },
    {
      value: 'Malaysia'
    },
    {
      value: 'Maldives'
    },
    {
      value: 'Mali'
    },
    {
      value: 'Malta'
    },
    {
      value: 'Marshall Island'
    },
    {
      value: 'New Caledonia'
    },
    {
      value: 'New Zealand'
    },
    {
      value: 'Niger'
    },
    {
      value: 'Niue'
    },
    {
      value: 'Norway'
    },
    {
      value: 'Oman'
    },
    {
      value: 'Pakistan'
    },
    {
      value: 'Palau'
    },
    {
      value: 'Panama'
    },
    {
      value: 'Peru'
    },
    {
      value: 'Philippines'
    },
    {
      value: 'Poland'
    },
    {
      value: 'Qatar'
    },
    {
      value: 'Romania'
    },
    {
      value: 'Russian Federation'
    },
    {
      value: 'Rwanda'
    },
    {
      value: 'Saint Helena'
    },
    {
      value: 'Saint Lucia'
    },
    {
      value: 'San Marino'
    },
    {
      value: 'Suriname'
    },
    {
      value: 'Swaziland'
    },
    {
      value: 'Sweden'
    },
    {
      value: 'Switzerland'
    },
    {
      value: 'Taiwan'
    },
    {
      value: 'Tajikistan'
    },
    {
      value: 'Thailand'
    },
    {
      value: 'Togo'
    },
    {
      value: 'Tonga Islands'
    },
    {
      value: 'Turkey '
    },
    {
      value: 'Tunisia'
    },
    {
      value: 'Ukraine'
    },
    {
      value: 'United Kingdom'
    },
    {
      value: 'United States'
    },
    {
      value: 'Uzbekistan'
    },
    {
      value: 'Vatican City'
    },
    {
      value: 'Vietnam'
    },
    {
      value: 'Virgin Islands (British)'
    },
    {
      value: 'Virgin Islands (USA)'
    },
    {
      value: 'Western Sahara'
    },
    {
      value: 'Western Samoa'
    },
    {
      value: 'Yemen'
    },
    {
      value: 'Zambia'
    },
    {
      value: 'Zimbabwe'
    }
  ];

  return (
    <div className='bg-light'>
      <Header />
      <Container className='bg-con pt-4 pb-5 text-center text-white ' fluid>
        <h2 className='display-4 fw-bold'>innovateforge.com</h2>
        <p className='ptx fs-4 mb-5'>This domain is available for sale!</p>
      </Container>

      <Container className=' pos' fluid>
        <Container   >
          <Row>
            <Col sm={12} md={6} lg={6}> <Card className='pt-4 pb-4 pe-3 ps-3'>
              <Card.Body>
                <Card.Title className='mb-4'>Get a price in less than 24 hours</Card.Title>
                <Card.Text className='mb-4 pb-2'>
                  Fill out the form below. One of our domain experts will have a price to you within 24 business hours.
                </Card.Text>
                <Row>
                  <Col sm={12} md={6} lg={6}> <TextField
                    id="outlined-Fname-input"
                    label="First Name *"
                    type="text"
                    className='w-100'
                    autoComplete="current-Fname"
                  />
                  </Col>
                  <Col sm={12} md={6} lg={6}> <TextField
                    id="outlined-Lname-input"
                    label="Last Name *"
                    type="text"
                    className='w-100 mtb'
                    autoComplete="current-Lname"
                  />
                  </Col>
                </Row>


                <TextField
                  id="outlined-email-input"
                  label="Eamil *"
                  type="email"
                  className='w-100 mb-3 mt-3'
                  autoComplete="current-email"
                />

                <TextField
                  id="outlined-phone-input"
                  label="Phone *"
                  type="number"
                  className='w-100 mb-3'
                  autoComplete="current-phone"
                />
                <TextField
                  id="outlined-select-country-native"
                  className='w-100 mb-3'
                  select
                  defaultValue="India"
                  slotProps={{
                    select: {
                      native: true,
                    },
                  }}
                >
                  {countries.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.value}
                    </option>
                  ))}
                </TextField>
                <div className='w-75 bg-light border border-2 ps-3 pe-3 pt-2 pb-2'>
                  <Row>
                    <Col sm={6} md={6} lg={6} className='d-flex align-items-center'><input className=' cbx' type='checkbox' /> <span className='fsz '>I'am not a robot</span></Col>
                    <Col sm={6} md={6} lg={6} className='d-flex  flex-column cen'><div className='w-25 me-4'><img src={rob} className='w-100 h-100 ' /></div>
                      <p className='mb-0'>reCAPTCHA</p>
                      <a href='#' className='text-decoration-none text-secondary fsz hov'>Privacy - Terms</a></Col>
                  </Row>
                </div>
                <p className='mt-2'>By submitting and clicking Get Price, you agree to our <br />
                  <a className='ctx ' href='#'>Privacy Policy</a>
                  .</p>
                <Button variant="dark" className='w-100'>Get price</Button>
              </Card.Body>
            </Card>


            </Col>
            <Col sm={12} md={6} lg={6} className='mtc'>
              <Card className='h-100'>
                <Card.Body className='d-flex align-items-center justify-content-center flex-column'>
                  <img src={time} />
                  <Card.Title className='text-center fs-4 mt-4'>Need a price instantly?<br /> Contact us now.</Card.Title>
                  <a href='#' className='ctx hov text-decoration-none fs-2 fw-bold'>1-855-646-1390</a>
                  <a href='#' className='ctx hov text-decoration-none fs-2 fw-bold mt-3'>+1 781-373-6808</a>
                  <p className='fs-4'>(or contact our US based support)</p>
                </Card.Body>
              </Card>


            </Col>
          </Row> <Row>
            <Col sm={12} md={6} lg={6}>   <div className='d-flex justify-content-end align-items-center'>  <a href='#' className=' ctx mt-2 me-2'>Do not share my personal information
            </a>|
              <a href='#' className=' ctx mt-2 ms-2'>
                Privacy Settings</a></div></Col>
            <Col sm={12} md={6} lg={6}></Col>
          </Row>
        </Container>
      </Container>


      <Footer />
    </div>
  )
}

export default Page