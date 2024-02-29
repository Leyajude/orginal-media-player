import React from 'react'
import { Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

function LandingPage() {
const navigate= useNavigate()
  const handleNavigate=()=>{
    navigate('/home')
  }
  return (
   <>
    <div className='container mt-5'>
      <div className="header row align-items-center m-5">
        <div className="col-lg-5">
          <h3>Welcome to <span className='text-warning'>Media Player</span></h3>
          <p style={{textAlign:'justify'}}>Media player will allow Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab porro, error tempora odio nihil consequuntur dolorem rem laboriosam necessitatibus temporibus in! Deleniti porro sit enim neque mollitia adipisci ad cupiditate!</p>
        <button onClick={handleNavigate} className='btn btn-info'>Get Started</button>
        </div>
        <div className="col-lg-1"></div>
        <div className="col-lg-6">
          <img src="https://c.tenor.com/lhlDEs5fNNEAAAAC/music-beat.gif" alt="Landing image" />
        </div>
      </div>
      <div className="features">
        <h3 className='text-center'>features</h3>
        <div className='row'>
          <div className="col-lg-4">
          <Card >
      <Card.Img variant="top" src="https://cdn.dribbble.com/users/1445486/screenshots/3856847/ondas-small.gif" />
      <Card.Body>
        <Card.Title>Manage Videos</Card.Title>
        <Card.Text>
          Some quick example text to build on the card 
        </Card.Text>
      </Card.Body>
    </Card>
          </div>
          <div className="col-lg-4">
          <Card >
      <Card.Img variant="top" src="https://i.pinimg.com/originals/53/b5/55/53b555c98e73777b01a4d25a0a5d2b77.gif" />
      <Card.Body>
        <Card.Title>Categorize videos</Card.Title>
        <Card.Text>
          Some quick example text to build on the card 
        </Card.Text>
      </Card.Body>
    </Card>
          </div>
          <div className="col-lg-4">
          <Card >
      <Card.Img variant="top" src="https://cdn.dribbble.com/users/497438/screenshots/2084032/xtyf_1.gif" />
      <Card.Body>
        <Card.Title>Watch History</Card.Title>
        <Card.Text>
          Some quick example text to build on the card 
        </Card.Text>
      </Card.Body>
    </Card>
          </div>
        </div>
      </div>
      <div className="video row border mt-5 p-5 rounded mb-5 align-items-center">
        <div className="col-lg-5">
          <h3 className='text-warning'>Simple,Fast and Powerful</h3>
          <p style={{textAlign:'justify'}}> <span className='fs-4'>Play Everything:</span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia, ipsa quam velit dolor esse, blanditiis ea repellat sint quae quisquam eos ad omnis rerum at, tenetur facilis fugit vitae. Illo.</p>
          <p style={{textAlign:'justify'}}> <span className='fs-4'>categorizes:</span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia, ipsa quam velit dolor esse, blanditiis ea repellat sint quae quisquam eos ad omnis rerum at, tenetur facilis fugit vitae. Illo.</p>
          <p style={{textAlign:'justify'}}> <span className='fs-4'>watch video:</span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia, ipsa quam velit dolor esse, blanditiis ea repellat sint quae quisquam eos ad omnis rerum at, tenetur facilis fugit vitae. Illo.</p>

     
        </div>
        <div className="col"></div>

        <div className="col-lg-6">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/3P-t4WRoW5c?si=wCld-rc9FVDIRiSh" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>

      </div>

    </div>
    <hr />
   </>
    
  )
}

export default LandingPage