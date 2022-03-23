import {BrowserRouter as Router, Routes ,Route} from 'react-router-dom'
import './index.css';

import LandingPage from "./pages/LandingPage/LandingPage";

function App() {
  return (
          <>
              <Router>
                  <Route exact path="/" component={LandingPage}/>
              </Router>


          </>

  );
}

export default App;
