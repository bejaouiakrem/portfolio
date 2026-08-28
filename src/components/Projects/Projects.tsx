import { useState } from 'react';
import { projects } from '../../data/projects';
import ProjectDetails from '../ProjectDetails/ProjectDetails';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="py-20 bg-[#0f1a2e]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">Featured Projects</h2>
        
        {selectedProject ? (
          <ProjectDetails 
            projectId={selectedProject} 
            onBack={() => setSelectedProject(null)} 
          />
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {featuredProjects.map((project) => (
                <div
                  key={project.id}
                  className="bg-[#0a1628] rounded-lg border border-[#1a2a4a] p-6 hover:border-[#3b82f6] transition-all duration-300 cursor-pointer hover:shadow-xl"
                  onClick={() => setSelectedProject(project.id)}
                >
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                    <span className="text-xs px-2 py-1 bg-[#3b82f6]/20 text-[#60a5fa] rounded-full">Featured</span>
                  </div>
                  <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span key={tech} className="px-2 py-1 bg-[#1a2a4a] text-gray-300 rounded text-xs">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2 py-1 bg-[#1a2a4a] text-gray-300 rounded text-xs">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>
                  <button className="text-[#3b82f6] hover:text-[#60a5fa] text-sm font-medium transition-colors">
                    View Details →
                  </button>
                </div>
              ))}
            </div>

            {otherProjects.length > 0 && (
              <>
                <h3 className="text-2xl font-semibold text-white mt-12 mb-6">Other Projects</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {otherProjects.map((project) => (
                    <div
                      key={project.id}
                      className="bg-[#0a1628] rounded-lg border border-[#1a2a4a] p-6 hover:border-[#3b82f6] transition-all duration-300 cursor-pointer hover:shadow-xl"
                      onClick={() => setSelectedProject(project.id)}
                    >
                      <h4 className="text-lg font-semibold text-white mb-2">{project.title}</h4>
                      <p className="text-gray-400 text-sm mb-3 line-clamp-2">{project.description}</p>
                      <div className="flex flex-wrap gap-1 mb-3">
                        {project.technologies.slice(0, 3).map((tech) => (
                          <span key={tech} className="px-2 py-0.5 bg-[#1a2a4a] text-gray-300 rounded text-xs">
                            {tech}
                          </span>
                        ))}
                      </div>
                      <button className="text-[#3b82f6] hover:text-[#60a5fa] text-sm font-medium transition-colors">
                        View Details →
                      </button>
                    </div>
                  ))}
                </div>
              </>
            )}
          </>
        )}
      </div>
    </section>
  );
};

export default Projects;