
import React from 'react';
import { Carousel } from 'react-bootstrap';
import './App.css';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
  MDBBtn
} from 'mdb-react-ui-kit';
import { faLocationArrow, faPhone , faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from "./images/logo1.png";
import img1 from "./images/clinic.jpg";
import img2 from "./images/profile1.jpg";
import stroke from "./images/stroke.jpg";
import sciatica from "./images/sciatica.jpg";
import neckpain from "./images/neckpain.jpg";
import frozen from "./images/frozen_shoulder.jpg";
import fractures from "./images/fractures.jpg";
import bellspalsy from "./images/bellspalsy.jpg";
import backpain from "./images/backpain.jpg";
import img4 from "./images/clinic3.jpg";
import img5 from "./images/clinic4.jpg";
function App() {

 

  return (
    <div>
    <div className="App">
   {/* heading */}
  <div >
 
  

<nav id="navbar-example2" className="navbar navbar-light bg-light" style={{ height: '50%' }}>
  {/* <div class="image-container"> */}
    <img src={logo} alt="Image" className="image-container" style={{ height: '30%' }} />
  {/* </div> */}
  <h1 className="heading" style={{ fontSize: '250%', alignItems:'left' }}>PHYSIOTHERAPIST</h1>
  <ul className="nav nav-pills" style={{ fontSize: '14px' }}>
    <li className="nav-item">
      <a className="nav-link" href="#scrollspyHeading1">Home</a>
    </li>
    <li className="nav-item">
      <a className="nav-link" href="#scrollspyHeading2">Services</a>
    </li>
    <li className="nav-item"><a className="nav-link" href="#scrollspyHeading3">About</a></li>
    <li className="nav-item"><a className="nav-link" href="#scrollspyHeading4">Review</a></li>
    <li className="nav-item"><a className="nav-link" href="#scrollspyHeading5">Contact</a></li>
  </ul>
</nav>
<div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-offset="0" class="scrollspy-example" tabindex="0">
  <h4 id="scrollspyHeading1"></h4>
  <p> 
  <div >
     <header className="App-header">
      <div className="text-container">
      {/* <h1>Welcome to Our Clinic</h1>
        <p>Get expert care for your healthcare needs.</p>
        <button value='Book Appointment' type="Submit"  href="#scrollspyHeading5">Book Appointment</button><br></br> */}
 
       <div className="text-container d-flex flex-row justify-content-start align-items-center">
        
        <p>
        <h1>Welcome to Our Clinic</h1>
        <p>Get expert care for your healthcare needs.</p>
        <button value='Book Appointment' type="Submit"  href="#scrollspyHeading5">Book Appointment</button><br></br>
      
        </p>
        
       <div id="carouselExampleControlsNoTouching" class="carousel slide" data-bs-touch="false" data-bs-interval="false">
  <div class="carousel-inner justify-content-start">
    
    <div class="carousel-item active">
      <img src={img1} class="d-block" style={{height:'60%', width: '90%'}} alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={img4} class="d-block" style={{height:'60%', width: '90%'}} alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={img5} class="d-block" style={{height:'60%', width: '90%'}} alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</div>

</div>
    </header>
    </div>
     </p>


  <h4 id="scrollspyHeading2"></h4>
  <p>
    
  <div class="doctorsname">
        <section class="py-5">
  <div class="container mx-auto px-4">
   
    <div class="grid grid-cols-4 md:grid-cols-5 gap-4">
      <div class="bg-white p-6 shadow rounded">
      <h3 class="text-2xl font-bold text-center mb-7">Our Services</h3>
      <Container>
      <Row>
        <Col xs={6} md={4}>
          <img src={img1} class="rounded-full mr-4 img-size" />
          <h4 class="font-bold mb-2">Knee Pain</h4>
        <p>Tailored treatments for Knee pain.</p>
        </Col>
        <Col xs={6} md={4}>
          {/* <Image src="holder.js/171x180" roundedCircle /> */}
          <img src={neckpain} class="rounded-full mr-4 img-size" />
          <h4 class="font-bold mb-2">Neck Pain</h4>
        <p>Including post-operative care and recovery.</p>
        </Col>
        <Col xs={6} md={4}>
          <img src={backpain} class="rounded-full mr-4 img-size" />
          <h4 class="font-bold mb-2">Back Pain</h4>
        <p>Advanced treatments for Back pain.</p>
        </Col>
        <Col xs={6} md={4}>
          <img src={frozen} class="rounded-full mr-4 img-size" />
          <h4 class="font-bold mb-2">Frozen Shoulder</h4>
        <p>Treatments for frozen shoulder aim at reducing shoulder pain and preserving the range of motion. Treatments include medications.</p>
        </Col>
        <Col xs={6} md={4}>
          <img src={sciatica} class="rounded-full mr-4 img-size" />
          <h4 class="font-bold mb-2">Sciatica</h4>
        <p> Sciatica managed through manual therapy, devising exercise programs, acupuncture and providing rehabilitation for radiating lower back pain.</p>
        </Col>
        <Col xs={6} md={4}>
          <img src={fractures} class="rounded-full mr-4 img-size" />
          <h4 class="font-bold mb-2">Fractures</h4>
        <p>Tailored treatments for Fractures.</p>
        </Col>
        <Col xs={6} md={4}>
          <img src={stroke} class="rounded-full mr-4 img-size" />
          <h4 class="font-bold mb-2">Stroke</h4>
        <p>Treatment includes neurophysiological, motor learning, or orthopaedic principles..</p>
        </Col>
        <Col xs={6} md={4}>
          <img src={bellspalsy} class="rounded-full mr-4 img-size" />
          <h4 class="font-bold mb-2">Bell's palsy</h4>
        <p>Treatment includes electrotherapy, massage, therapeutic exercise, pati ent feedback and heat therapy have been shown to accelerate recovery, improve facial functioning and reduce complications.</p>
        </Col>
      </Row>
    </Container>
     
      </div>
      
    </div>
  </div>
</section>
        </div>

  </p>



  <h4 id="scrollspyHeading3"></h4>
  <p>

  <div class="doctorsname1">
        <h3 class="text-2xl font-bold text-center mb-7">Expert Physiotherapy Team</h3>
        <div class="row row-cols-1 row-cols-md-3 g-4">
          
  {/* <div class="col"> */}
    {/* <div class="card h-100"> */}
    
      <div class="card-body">
      <img src={img2} alt="Dr. Smith" className="rounded-full mr-4 img-size" />
        <h5 class="card-title">Dr.S.MUHAMMED MUHTHAR B.P.T</h5>
        <p class="text-sm text-zinc-600 dark:text-zinc-400">Chief Physiotherapist</p>
        <p class="card-text">With over 5 years of experience in physiotherapy.</p>
      </div>
    {/* </div> */}
  {/* </div> */}
 
 
</div>
        </div>

  </p>


  <h4 id="scrollspyHeading4"></h4>
  <p>

  <div class="doctorsname">
       {/* <section className="App-header"> */}
       <div class="row row-cols-1 row-cols-md-3 g-4">
        <h3 class="text-2xl font-bold text-center mb-6">Patient Testimonials</h3>

        <div class="col">
           <div class="card h-90">
      
             <div class="card-body">
                 <span class="text-yellow-500">⭐️⭐️⭐️⭐️⭐️</span>
                 <p class="mb-4">Professional and caring staff, improved my mobility significantly.</p>
                   <div class="flex items-center">
          
                 <p class="text-sm text-zinc-600 dark:text-zinc-400 ml-2">- Jane Smith</p>
             </div></div>
      <div class="card-footer">
        <small class="text-muted">Last updated 3 mins ago</small>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card h-90">
      
      <div class="card-body">
      <span class="text-yellow-500">⭐️⭐️⭐️⭐️⭐️</span>
      <p class="mb-4">Great experience at the clinic, highly recommend!</p>
        <div class="flex items-center">
          <p class="text-sm text-zinc-600 dark:text-zinc-400 ml-2">- John Doe</p>
        </div>
      </div>
      <div class="card-footer">
        <small class="text-muted">Last updated 3 mins ago</small>
      </div>
    </div>
  </div>
  </div>
  {/* </section> */}
       </div>


  </p>



  <h4 id="scrollspyHeading5"> </h4>
  <p>
  <main>
        <section className="contact-form">

          <h2>Contact Us</h2><br></br>
          <form>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea type="text" id="message" name="message" required></textarea>
            </div>
            <button type="submit">Submit</button>
          </form>
        </section>
      </main>

      <footer className="footer">
      <div className="footer-content">
        <div className="address">
          <FontAwesomeIcon icon={faLocationArrow} />
          Address: K.Pudur,Madurai- 625007
        </div>
        <div className="phone-number">
          <FontAwesomeIcon icon={faPhone} />
          Phone: <input  value="7708317381" />
        </div>
        <div className="email-address">
            <FontAwesomeIcon icon={faEnvelope} />
            Email: <a href="muhthar2001@gmail.com">muhthar2001@gmail.com</a>
          </div>
      </div>
     
    </footer>


  </p>
</div>

     </div>
      

      
    </div>
    </div>
  );
}

export default App;

