import App from './App.js';
import LandingPage from './LandingPage.js';
import Todoapp from './ToDo.js';

ReactDOM.render(
  <Router history = {browserHistory}>
    <Route path = "/" component = {App}>
      <Route path = "/first" component = {FirstPage}>
      <Route path = "/second" component = {SecondPage}>
    </Route>
  </Router>
);