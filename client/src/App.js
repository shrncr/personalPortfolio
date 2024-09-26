
import {Routes,Route} from "react-router-dom";
import './App.css';
import NavBar from './components/NavBar';
import ProjectsPage from './components/ProjectsPage';
import AboutMe from './components/AboutMe';

function App() {
  return (
    <div>
      <NavBar/>

      <Routes>
        <Route path = "/" element= {<AboutMe/>}/>
        <Route path = "/aboutme" element= {<AboutMe/>}/>
        <Route path = "/projects" element = {<ProjectsPage/>}/>
      </Routes>
      
    </div>
    
  );
}

export default App;
