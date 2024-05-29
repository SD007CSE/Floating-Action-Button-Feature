import React, { useState } from 'react';
import './SuggestionCard.css';
import { ReactComponent as Attach } from './icons/attach.svg';
import Dropdownfeature from './Dropdown';

function SuggestionCard() {
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
      {showCard && <div className="card-sugg">
      <div className="header">
        <h2 className="header-text">Share your <strong className="highlight">Suggestions</strong> with us for a chance to earn rewards!</h2>
      </div>
      <div className="separator"></div>
      <form className="form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="query" className="label">Which feature do you want to suggest?</label>
          <Dropdownfeature />
        </div>
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
        <button type="submit" className={`submit-button ${textareaValue ? 'active' : ''}`}>Submit</button>
      </form>
    </div>
    }

    {showDialog && (
        <>
          <div className="modal-overlay active" onClick={handleCloseDialog}></div>
          <div className="modal active">
            <div className="modal-body modal-message">
            Thanks for your valuable Suggestion!
            </div>
          </div>
        </>
      )}    



    </div>
  );
}

export default SuggestionCard;
