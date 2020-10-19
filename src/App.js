import React from 'react';
import './App.css';

import {BrowserRouter as Router, Switch, Route} from "react-router-dom"

import HomePage from "./routes/homePage/HomePage"
import ProjectsPage from "./routes/projectsPage/ProjectsPage"
import BlogsPage from "./routes/blogsPage/BlogsPage"
import BlogCreation from "./routes/blogCreation/BlogCreation"

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/projects">
            <ProjectsPage />
          </Route>
          <Route path="/about">
            <div>
              About page
            </div>
          </Route>
          <Route path="/Blogs">
            {props => <BlogsPage {...props}/> }
          </Route>
          <Route path="/blogcreator">
            {props => <BlogCreation {...props} />}
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
