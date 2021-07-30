import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Homepage from './pages/Homepage';
import Workpage from './pages/Workpage';
import Aboutpage from './pages/Aboutpage';
import Contactpage from './pages/Contactpage';
import Project from './components/Project'
import Contactbar from './components/Contactbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Contactbar />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/work" component={Workpage} />
        <Route exact path="/about" component={Aboutpage} />
        <Route exact path="/contact" component={Contactpage} />
        <Route exact path="/work/:id" component={Project} />
      </Switch>
    </Router>
  );
}

export default App;
