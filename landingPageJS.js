function LandingPage(){
    return(
      <div id="wrapper">
        <h1>Roomie</h1>
        <h2>Home</h2>
        <div id="info">
        <p>Info</p>
      </div>
      <div id="feed">
        <p>Feed</p>
      </div>
      <div id="menu">
        <p>Menu</p>
      </div>
  </div>
    );
} 
ReactDOM.render(<LandingPage/>,document.getElementById('root'));
