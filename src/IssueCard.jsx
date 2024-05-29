import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ReactComponent as Attach } from './icons/attach.svg';
import './IssueCards.css';
import Dropdownfeature from './Dropdown';

function IssueCard() {
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
      {showCard && (
    <div className="card">
      <div className="header">
        <h2 className="header-text">
          Tell us what <strong className="header-span">Issues</strong> you faced with us.
        </h2>
      </div>
      <div className="separator"></div>
      <form className="form" onSubmit={handleSubmit}>
        <Dropdownfeature/>
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
      )}

      {showDialog && (
        <>
          <div className="modal-overlay active" onClick={handleCloseDialog}></div>
          <div className="modal active">
            <div className="modal-body modal-message">
            Thanks for bringing the issue to our attention.We'll review it shortly and provide an update soon!
            </div>
          </div>
        </>
      )}

    </div>
  );
}

export default IssueCard;
