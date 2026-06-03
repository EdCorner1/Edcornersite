import type { OpsProject } from "@/data/ops";
import { ProgressBar } from "./ProgressBar";

export function ProjectsGrid({ projects }: { projects: OpsProject[] }) {
  return (
    <section className="ops-panel bottom-row" id="projects">
      <div className="ops-section-title">
        <div>
          <p>Projects</p>
          <h2>Active projects</h2>
        </div>
        <button type="button">Add project</button>
      </div>

      <div className="ops-project-grid">
        {projects.map((project) => (
          <article key={project.name} className="ops-project-card">
            <div>
              <h3>{project.name}</h3>
              <span>{project.status}</span>
            </div>
            <p>{project.next}</p>
            <ProgressBar value={project.progress} />
          </article>
        ))}
      </div>
    </section>
  );
}
