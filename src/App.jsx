import "./App.css";
import Nav from './components/Nav';
import Hero from './components/Hero';
import CourseCard from './components/CourseCard';
import Calc1 from './pages/Calc1';
import Calc2 from './pages/Calc2';
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path = "/" 
                element={
                  <>
                    <Hero />
                      <div className = "container-course-card">
                        <CourseCard name = "Calculus 1" topic1 = "Related Rates" topic2 = "Optimization" path = "/calc1"/>
                        <CourseCard name = "Calculus 2" topic1 = "Volume By Rotation" topic2 = "Sequences and Series" path = "/calc2"/>
                      </div>
                  </>}>
          </Route>
          <Route path = "/calc1" element={<Calc1/>}></Route>
          <Route path = "/calc2" element={<Calc2/>}></Route>
      </Routes>
    </div>
    
  );
}

export default App;