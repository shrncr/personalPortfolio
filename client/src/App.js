import logo from './logo.svg';
import {Route} from "react-router-dom";
import './App.css';
import NavBar from '../components/NavBar';
import ProjectsPage from './components/ProjectsPage';
import AboutMe from './components/AboutMe';

function App() {
  return (
    <div>
      <NavBar/>
      <Switch>
        <Route path = "/aboutme" exact component = {<AboutMe/>}></Route>
        <Route path = "/projects" exact component = {<ProjectsPage/>}></Route>
      </Switch>
      <ProjectsPage/> //components are thrown in like standalone html tags
    </div>
    
  );
}

export default App;
