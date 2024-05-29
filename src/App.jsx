// const actions = isLoggedIn
//     ? [
//         { icon: <CIcon />, name: 'Contact\u00A0Us', component: <ReportAnIssueCard /> },
//         { icon: <SIcon />, name: 'Give\u00A0Suggestion', component: <SuggestionCard /> },
//         { icon: <FeedIcon />, name: 'Share\u00A0Feedback', component: <FeedBackCard /> },
//         { icon: <RIcon />, name: 'Report\u00A0an\u00A0Issue', component: <IssueCard /> },
//       ]
//     : [
//         { icon: <CIcon />, name: 'Contact\u00A0Us', component: <ReportAnIssueCardOut /> },
//         { icon: <SIcon />, name: 'Give\u00A0Suggestion', component: <SuggestionsCardOut /> },
//         { icon: <FeedIcon />, name: 'Share\u00A0Feedback', component: <FeedBackCardOut /> },
//         { icon: <RIcon />, name: 'Report\u00A0an\u00A0Issue', component: <IssueCardOut /> },
//       ];


import React, { useState, useEffect } from 'react';
import './App.css';
import fIcon from "./icons/fabIcon.svg";
import fIconMobile from "./icons/mobIcon.svg"; // Add mobile icon
import Cross from "./icons/crossbtn.svg";
import { ReactComponent as CIcon } from "./icons/contactIcon.svg";
import { ReactComponent as SIcon } from "./icons/Suggestion.svg";
import { ReactComponent as FeedIcon } from "./icons/feedbackIcon.svg";
import { ReactComponent as RIcon } from "./icons/reportIcon.svg";
import ReportAnIssueCardOut from './ContactCardOut';
import FeedBackCardOut from './FeedbackCardOut';
import SuggestionsCardOut from './SuggestionsCardOut';
import IssueCardOut from './IssueCardOut';
import ReportAnIssueCard from './ContactCard';
import FeedBackCard from './FeedbackCard';
import SuggestionCard from './SuggestionCard';
import IssueCard from './IssueCard';

function App() {
  const [selectedAction, setSelectedAction] = useState(null);
  const [dialClicked, setDialClicked] = useState(false);
  const [cardDisplayed, setCardDisplayed] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 576);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 576);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleActionClick = (component) => () => {
    setSelectedAction(component);
    setCardDisplayed(true);
    setDialClicked(true); // Keep the dial open when an action is selected
  };

  const handleSpeedDialClick = () => {
    setDialClicked(!dialClicked);
  };

  const handleLoginClick = () => {
    setIsLoggedIn(!isLoggedIn);
    setSelectedAction(null); // Clear any selected action on login/logout
  };

  const actions = isLoggedIn
    ? [
        { icon: <CIcon />, name: 'Contact\u00A0Us', component: <ReportAnIssueCard /> },
        { icon: <SIcon />, name: 'Give\u00A0Suggestion', component: <SuggestionCard /> },
        { icon: <FeedIcon />, name: 'Share\u00A0Feedback', component: <FeedBackCard /> },
        { icon: <RIcon />, name: 'Report\u00A0an\u00A0Issue', component: <IssueCard /> },
      ]
    : [
        { icon: <CIcon />, name: 'Contact\u00A0Us', component: <ReportAnIssueCardOut /> },
        { icon: <SIcon />, name: 'Give\u00A0Suggestion', component: <SuggestionsCardOut /> },
        { icon: <FeedIcon />, name: 'Share\u00A0Feedback', component: <FeedBackCardOut /> },
        { icon: <RIcon />, name: 'Report\u00A0an\u00A0Issue', component: <IssueCardOut /> },
      ];

  return (
    <div className="App">
      <div className={`overlay ${dialClicked ? 'active' : ''}`} onClick={handleSpeedDialClick}></div>
      <div className="App-header">
        <button className='button-log' onClick={handleLoginClick}>
          {isLoggedIn ? 'Logout' : 'Login'}
        </button>
        <div>
          <h3>You are now {isLoggedIn ? 'Logged In' : 'Logged Out'}</h3>
        </div>
        {selectedAction}
      </div>
      <div className={`speed-dial-container 
        ${cardDisplayed ? 'card-displayed' : ''} 
        ${!isLoggedIn ? 'logged-out' : ''} `}>
        <div className="speed-dial-button" onClick={handleSpeedDialClick}>
          <img src={dialClicked ? Cross : (isMobile ? fIconMobile : fIcon)} alt="Speed Dial Icon" />
        </div>
        <div className={`speed-dial-actions ${dialClicked ? 'active' : ''} ${cardDisplayed ? 'left-no-hover' : 'up'}`}>
          {actions.map((action) => (
            <div className={`speed-dial-action ${cardDisplayed ? 'no-hover' : ''}`} key={action.name} onClick={handleActionClick(action.component)}>
              {action.icon}
              <span className="tooltip always-visible">{action.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
