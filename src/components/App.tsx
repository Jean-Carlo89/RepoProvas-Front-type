import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

//reset css
import "../css/reset.css"

//component imports
import Home from './Home'

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/home' exact>
          <Home/>
        </Route>
      </Switch>
    </Router>
    
    
  );
}

export default App;
