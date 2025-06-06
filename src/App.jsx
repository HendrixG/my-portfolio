import './App.css';
import { projects } from './projects';
import ProjectCard from './ProjectCard';

function App() {
  return (
    <div className="app-wrapper">
      <div className="projects">
 <div className="header-card">
  <div className="card-inner">
    <h1>Application Examples</h1>
    <h2>Hendrix Gullixson</h2>
    <p>A showcase of web apps utilizing React</p>
  </div>
</div>

        {projects.map((project, idx) => (
          <ProjectCard key={idx} {...project} />
        ))}
      </div>
    </div>
  );
}

export default App;


