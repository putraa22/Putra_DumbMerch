import React, {useState} from 'react';
import './ComplainAdminStyle.css';
import user1  from '../../Asset/img/user1.jpg';
import user2  from '../../Asset/img/user2.jpg';
import admin  from '../../Asset/img/admin-img.jpg';
import ChatBubble from 'react-chat-bubble';
import {Container , Row , Col} from 'react-bootstrap';

function ComplainAdmin() {

    const [state] = useState([
        {
          type: 0,
          image: user1,
          text: "Hello Admin, I Need Your Help!",
        },
        {
          type: 1,
          image: admin,
          text: "Hello, is there anything i can help?",
        },
      ]);

  return (

    <>
    <Container className='complain-Container'>

        <Row className='msgadm-row'>
            <Col md={4} className='chat-user'>
                <Row className='mb-3'>
                    <Col className='ps-4' md>
                        <img src={user1} alt="user" className='Complain-user-img' />

                        <Col className='Complain-Chat-User' >
                            <h5 className='pt-2'  >Anna_weston</h5>
                            <p>Hello Admin, I Need Your Help!</p>
                        </Col>
                        
                    </Col>
                </Row>
                <Row>
                    <Col className='ps-4' md>
                        <img src={user2} alt="user" className='Complain-user-img' />

                        <Col className='Complain-Chat-User' >
                            <h5   >Jullie_Adams</h5>
                            <p>Hello Admin, I Need Your Help!</p>
                        </Col>
                        
                    </Col>
                </Row>
            </Col>
            <Col md={8}>
                <ChatBubble messages = {state} />
            </Col>
        </Row>


    </Container>
    
    
    
    </>












    // <div class="msgadm-container container-fluid">
    //   <div class="message-box row">
    //     <div class="chat-user col-4">
    //       <div class="msgadm-row row pt-5">
    //         <div class="col-2 ">
    //           <img className="msgadm-user" src={user1} alt="img-admin"></img>
    //         </div>
    //         <div class=" col-9">
    //           <h6 className="msgadm-admins pt-1">Anna_weston</h6>
    //           <p>Hello Admin, I Need Your Help!</p>
    //         </div>
    //       </div>
    //       <div class="msgadm-row row pt-5">
    //         <div class="col-2 ">
    //           <img className="msgadm-user" src={user2} alt="img-admin"></img>
    //         </div>
    //         <div class=" col-9">
    //           <h6 className="msgadm-admins pt-1">Sherly_clark</h6>
    //           <p>Excuse Me, Could you give me tracking number of my order?</p>
    //         </div>
    //       </div>
    //     </div>
    //     <div class="chat-box col-8">
    //       <ChatBubble messages={state}></ChatBubble>
    //     </div>
    //   </div>
    // </div>
  )
}

export default ComplainAdmin;