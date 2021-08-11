import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Homepage from './pages/Homepage';
import Workpage from './pages/Workpage';
import Aboutpage from './pages/Aboutpage';
import Contactpage from './pages/Contactpage';
import Projectpage from './pages/Projectpage'
import Contactbar from './components/Contactbar';
import ImageReveal from './components/ImageReveal';
import Test from './pages/Test';
import Footer from './components/Footer';
import AnimatedCursor from "react-animated-cursor"

function App() {
  return (
    <Router>
      <Navbar />
      <AnimatedCursor
        innerSize={16}
        outerSize={54}
        color='10, 10, 10'
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={4} />
      <Contactbar />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/work" component={Workpage} />
        <Route exact path="/about" component={Aboutpage} />
        <Route exact path="/contact" component={Contactpage} />
        <Route exact path="/work/:id" component={Projectpage} />
        <Route exact path="/image" component={ImageReveal} />
        <Route exact path="/test" component={Test} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
