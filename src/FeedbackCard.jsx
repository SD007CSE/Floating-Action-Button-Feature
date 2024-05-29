import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Checkbox from '@mui/material/Checkbox';
import { ReactComponent as Attach } from './icons/attach.svg';
import FormControlLabel from '@mui/material/FormControlLabel';
import './FeedbackCard.css';

function FeedbackCard() {
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
      {showCard && <div className="card-feedb">
      <div className="header">
        <h2 className="header-text">
          Let me know your <strong className="header-span">Feedback</strong> about us!
        </h2>
      </div>
      <div className="separator"></div>
      <form className="form" onSubmit={handleSubmit}>
        <div className="textarea-container">
          <textarea
            id="query"
            placeholder="Write here..."
            rows="7"
            className="textarea"
            onChange={handleTextareaChange}
          />
          <label className="attach-button">
            <Attach />
            Attach
            <input type="file" hidden />
          </label>
        </div>
        <div className="checkbox-container">
          <FormControlLabel className="checkbox" control={<Checkbox />} label="Send feedback anonymously" />
        </div>
        <button
          type="submit"
          className="submit-button"
          style={{
            backgroundColor: textareaValue ? 'black' : 'rgba(15, 15, 15, 1)',
            opacity: textareaValue ? '1' : '0.6',
          }}
        >
          Submit
        </button>
      </form>
      </div>
      }
      {showDialog && (
        <>
          <div className="modal-overlay active" onClick={handleCloseDialog}></div>
          <div className="modal active">
            <div className="modal-body modal-message">
            Thanks for your valuable feedback!
            </div>
          </div>
        </>
      )}



    </div>
  );
}

export default FeedbackCard;
