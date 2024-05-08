
import React,{useState} from 'react';
import { Carousel } from 'react-bootstrap';
import './App.css';
import Container from 'react-bootstrap/Container';


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
import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { NavLink } from "react-router-dom";
import Footer from './Footer';
import ReactDOM from 'react-dom';
import Header from "./Components/Header";

function App() {
  // const MyContext = React.createContext(null);
  const [showNavbar, setShowNavbar] = useState(false);

    const handleShowNavbar = () => {
        setShowNavbar(!showNavbar);
    };


  return (
    <div>



    <div className="App">
   {/* heading */}
  <div >
  {/* <button className="navbar-toggler custom-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
  <span className="navbar-toggler-icon"></span>
</button> */}
<div className='header'>
<Header />
</div>




<div data-bs-spy="scroll" data-bs-target="#navbar-example2" data-bs-offset="0" class="scrollspy-example" tabindex="0">
  <h4 id="scrollspyHeading1"></h4>
  
  <div >
     <header className="App-header">
      <div className="text-container">
    
 
       <div className="text-container d-flex flex-row justify-content-start align-items-center">
         {/* <img src={img2} alt="Dr. Smith" className="rounded-full mr-4 img-size" /> */}
        <div>
        <h1>Welcome to Our Clinic</h1>
        <p>Get expert care for your healthcare needs.</p>
        <button value='Book Appointment' type="Submit"  href="#scrollspyHeading5">Book Appointment</button><br></br>
      
        </div>
        
        
        
       <div id="carouselExampleControlsNoTouching" class="carousel slide" data-bs-touch="false" data-bs-interval="false">
  <div class="carousel-inner justify-content-start">
    
    <div class="carousel-item active">
      <img src={img1} class="d-block" style={{height:'60%', width: '70%',position:'relative'}} alt="..."/>
    </div>
    {/* <div class="carousel-item">
      <img src={img4} class="d-block" style={{height:'20%', width: '90%'}} alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={img5} class="d-block" style={{height:'80%', width: '90%'}} alt="..."/>
    </div> */}
  </div>
  {/* <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControlsNoTouching" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button> */}
</div>
</div>

</div>
    </header>
    </div>


  <h4 id="scrollspyHeading2"></h4>
  
    
  <div class="doctorsname">
        <section class="py-5">
  <div class="container mx-auto px-4">
   
    <div class="grid grid-cols-4 md:grid-cols-5 gap-4">
      <div class="bg-white p-6 shadow rounded">
      <h3 class="text-2xl font-bold text-center mb-7">Our Services</h3>
      <Container style={{position: "relative"}}>
      <ListGroup as="ol" numbered>
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
        
      ><img src={img1} class="rounded-full mr-4 img-size" />
        <div className="ms-2 me-auto">
          <div className="fw-bold">Knee Pain</div>
        <p>Tailored treatments for Knee pain.</p>

        </div>
      </ListGroup.Item>
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      ><img src={neckpain} class="rounded-full mr-4 img-size" />
        <div className="ms-2 me-auto">
          <div className="fw-bold">Neck Pain</div>
          Including post-operative care and recovery.
        </div>
      </ListGroup.Item>
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      ><img src={backpain} class="rounded-full mr-4 img-size" />

        <div className="ms-2 me-auto">
          <div className="fw-bold">Back Pain</div>
          Advanced treatments for Back pain.
        </div>
      </ListGroup.Item>

      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start">
          <img src={frozen} class="rounded-full mr-4 img-size" />

        <div className="ms-2 me-auto">
          <div className="fw-bold">Frozen Shoulder</div>
          Treatments for frozen shoulder aim at reducing shoulder pain and preserving the range of motion. Treatments include medications.
        </div>
      </ListGroup.Item>

      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start">
          <img src={sciatica} class="rounded-full mr-4 img-size" />

        <div className="ms-2 me-auto">
          <div className="fw-bold">Sciatica</div>
          Sciatica managed through manual therapy, devising exercise programs, acupuncture and providing rehabilitation for radiating lower back pain.
        </div>
      </ListGroup.Item>

      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start">
         <img src={fractures} class="rounded-full mr-4 img-size" />

        <div className="ms-2 me-auto">
          <div className="fw-bold">Fractures</div>
          Tailored treatments for Fractures.  
          </div>
      </ListGroup.Item>

      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start">
         <img src={stroke} class="rounded-full mr-4 img-size" />

        <div className="ms-2 me-auto">
          <div className="fw-bold">Stroke</div>
          Treatment includes neurophysiological, motor learning, or orthopaedic principles. 
          </div>
      </ListGroup.Item>

      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start">
         <img src={bellspalsy} class="rounded-full mr-4 img-size" />


        <div className="ms-2 me-auto">
          <div className="fw-bold">Bell's palsy</div>
          Treatment includes electrotherapy, massage, therapeutic exercise, patient feedback and heat therapy have been shown to accelerate recovery, improve facial functioning and reduce complications.
          </div>
      </ListGroup.Item>

    </ListGroup>
</Container>
     
      </div>
      
    </div>
  </div>
</section>
        </div>

  {/* </p> */}



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
{/* 
      <footer className="footer">
      <div className="footer-content">
        <div className="address">
          <FontAwesomeIcon icon={faLocationArrow} style={{ marginRight: '5px' }} />
          <span>Address: K.Pudur,Madurai- 625007</span>
        </div>
        <div className="phone-number">
         <center> <FontAwesomeIcon icon={faPhone} style={{ marginRight: '5px' }} />
          <span>Phone: 7708317381</span> </center>
        </div>
        <div className="email-address">
            <FontAwesomeIcon icon={faEnvelope} style={{ marginRight: '5px' }} />
            <span>Email:muhthar2001@gmail.com </span>
          </div>
      </div>
   <center><p>© 2024 Physiotherapy Clinic</p></center>
    </footer> */}
        
    <div>
            {/* <div
                style={{
                    minHeight: "400px",
                    color: "green",
                }}
            >
                <h1>GeeksforGeeks</h1>
            </div> */}
            <Footer />
        </div>

  </p>
</div>

     </div>

      
    </div>
    </div>
  );
}

export default App;


