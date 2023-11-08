
import styles from './App.module.css';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Experience from './components/Experience/Experience';
import Navbar from './components/Navbar/Navbar';
import Project from './components/Projects/Project';
import Summary from './components/Summary/Summary';

function App() {
  

  return (
    <div className={styles.App}>
      <Navbar />
      <Summary/>
      <About/>
      <Experience/>
      <Project/>
      <Contact/>
    </div>
  )
}

export default App
