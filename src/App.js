import React from 'react'

// import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import "././App.css"
import Heading from './components/common/heading/Heading'
import { BrowserRouter as Router, Switch,Route } from 'react-router-dom/cjs/react-router-dom.min'
import Home from './components/home/Home'
import About from './components/about/About'
import Project from './components/project/Project'
import Skills from './components/skills/Skills'
import ContactMe from './components/contact/ContactMe'
const App = () => (
  <>
    <Router>
    <Heading />
    <Switch>
      <Route path="/" exact component={Home}/>
      <Route path="/about" exact component={About}/>
      <Route path="/projects" exact component={Project}/>
      <Route path="/skills" exact component={Skills}/>
      <Route path="/contact" exact component={ContactMe}/>
          {/* <ToastContainer /> */}



    </Switch>

    </Router>

  </>
)

export default App
