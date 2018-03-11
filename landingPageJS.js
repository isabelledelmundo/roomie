function LandingPage(){
    return(
      <div id="wrapper">
        <h1>Roomie</h1>
        <h2>
          <button class="btn home">home</button>
          <button class="btn schedule">schedule</button>
          <button class="btn tasks">tasks</button>
          <button class="btn finances">finances</button>
          <button class="btn profile">profile</button>
        </h2>
        
        
        
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
        <p>my tasks</p>
      </div>
      <div id="myFinances">
        <p>my finances</p>
      </div>
  </div>
    );
} 
ReactDOM.render(<LandingPage/>,document.getElementById('root'));

