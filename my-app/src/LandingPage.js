import React from 'react';
import './LandingPage.css';
import TodoApp from './ToDo'

const LandingPage = () => {
    return(
      
      <div id="wrapper">
        
        <div id="info">
        <p>Info</p>
          <p>Address</p>
          <p>Phone Number </p>
      </div>

      <div id="feed">
        <p>Feed</p>
      </div>
      <div id="mySchedule">
        <p>my schedule</p>
      </div>
      <div id="myTasks">
        <TodoApp/>
      </div>
      <div id="myFinances">
        <p>my finances</p>
      </div>
  </div>
    );

} 

export default LandingPage;
// ReactDOM.render(<LandingPage />,document.getElementById('root'));
// registerServiceWorker();


