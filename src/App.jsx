import "./App.css";
import Nav from './components/Nav';
import Hero from './components/Hero';
import CourseCard from './components/CourseCard';

function App() {
  return (
    <div>
      <Nav />
      <Hero />
      <div className = "container-course-card">
        <CourseCard name = "Calculus 1" topic1 = "Related Rates" topic2 = "Optimization"/>
        <CourseCard name = "Calculus 2" topic1 = "Volume By Rotation" topic2 = "Sequences and Series"/>
      </div>
      
    </div>
  );
}

export default App;