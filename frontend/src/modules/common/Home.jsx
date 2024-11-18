
import { Link } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar';
import { Container, Nav, Button } from 'react-bootstrap';
import AllPropertiesCards from '../user/AllPropertiesCards';

const Home = () => {
   
   return (
      <>
         <Navbar expand="lg" className="navbar">
            <Container fluid>
               <Navbar.Brand><h2>RenterGO</h2></Navbar.Brand>
               
               <Navbar.Collapse>
                  <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                  </Nav>
                  <Nav>
                     <Link to={'/'}>Home</Link>
                     <Link to={'/login'}>Login</Link>
                     <Link to={'/register'}>Register</Link>
                  </Nav>
               </Navbar.Collapse>
            </Container>
         </Navbar>
         <div className='property-content'>
            <div className='text-center'>
               <h1 className='m-1 p-5'>All Properties that may you look for</h1>
               <p style={{ fontSize: 15, fontWeight: 800 }}>Want to post your Property? <Link to={'/register'}><Button >Register as Owner</Button></Link></p>
            </div>

            <Container>
               <AllPropertiesCards />
            </Container>
         </div>
      </>
   )
}

export default Home


