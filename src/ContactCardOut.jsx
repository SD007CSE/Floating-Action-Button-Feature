import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Box from '@mui/material/Box';
import './ContactUsOut.css';

function ContactUsCardOut() {
  const [textareaValue, setTextareaValue] = useState('');
  const [showCard, setShowCard] = useState(true);
  const [showDialog, setShowDialog] = useState(false);

  const handleTextareaChange = (event) => {
    setTextareaValue(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setShowCard(false);
    setShowDialog(true);
  };

  const handleCloseDialog = () => {
    setShowDialog(false);
    setTextareaValue('');
  };

  return (
    <div>
   {showCard &&<div className="card-out">
      <div className="header">
        <h2>Get in <strong>Contact with us</strong> for your queries!</h2>
      </div>
      <Box className="separator" />
      <form className="form-out" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name" className="label">Your Name <span style={{ color: 'red' }}>*</span></label>
          <input type="text" id="name" placeholder="Enter your Name" className="input" />
        </div>
        <div>
          <label htmlFor="name" className="label">Your Email <span style={{ color: 'red' }}>*</span></label>
          <input type="text" id="name" placeholder="Enter your Name" className="input" />
        </div>
        <div>
          <label htmlFor="name" className="label">Your Mobile Number</label>
          <input type="text" id="name" placeholder="Enter your Name" className="input" />
        </div>

        <div>
          <label htmlFor="query" className="label">What would you like to ask? <span style={{ color: 'red' }}>*</span></label>
          <textarea id="query" placeholder="Write here..." className="textarea" onChange={handleTextareaChange}></textarea>
        </div>
        <button type="submit"  className={`button ${textareaValue ? 'enabled' : 'disabled'}`}>Submit</button>
      </form>
      </div>
   }
      {showDialog && (
        <>
          <div className="modal-overlay active" onClick={handleCloseDialog}></div>
          <div className="modal-cot active">
            <div className="modal-body modal-message">
            Thanks for reaching out to us! We will get back to you as soon as possible
            </div>
          </div>
        </>
      )}
      



    </div>
  );
}

export default ContactUsCardOut;
