import { projects } from '../../data/projects';
import { ArrowLeft, Github } from 'lucide-react';

interface ProjectDetailsProps {
  projectId: string;
  onBack: () => void;
}

const ProjectDetails = ({ projectId, onBack }: ProjectDetailsProps) => {
  const project = projects.find(p => p.id === projectId);

  if (!project) {
    return <div className="text-white">Project not found</div>;
  }

  return (
    <div className="bg-[#0a1628] rounded-lg border border-[#1a2a4a] p-6 md:p-8">
      {/* Back button */}
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-6"
      >
        <ArrowLeft size={20} />
        Back to Projects
      </button>

      {/* Project Header */}
      <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-white">{project.title}</h2>
          {project.featured && (
            <span className="inline-block mt-2 text-xs px-3 py-1 bg-[#3b82f6]/20 text-[#60a5fa] rounded-full">
              ⭐ Featured Project
            </span>
          )}
        </div>
        <div className="flex gap-3">
          {project.repository && (
            <a
              href={project.repository}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-[#1a2a4a] text-gray-300 hover:text-white rounded-lg transition-colors"
            >
              <Github size={18} />
              Code
            </a>
          )}
          
        </div>
      </div>

      {/* Description */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-white mb-2">Overview</h3>
        <p className="text-gray-300">{project.description}</p>
      </div>

      {/* Technologies */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-white mb-2">Technologies</h3>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span key={tech} className="px-3 py-1 bg-[#1a2a4a] text-gray-300 rounded-full text-sm border border-[#2a3a5a]">
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Architecture */}
      {project.architecture && (
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-white mb-2">Architecture</h3>
          <p className="text-gray-300 mb-3">{project.architecture.description}</p>
          <div className="bg-[#0f1a2e] border border-[#1a2a4a] rounded-lg p-4">
            <div className="space-y-3">
              {project.architecture.flow.map((step, index) => (
                <div key={index} className="flex items-center gap-3">
                  <span className="flex items-center justify-center w-6 h-6 bg-[#3b82f6]/20 text-[#3b82f6] rounded-full text-xs font-bold">
                    {index + 1}
                  </span>
                  <span className="text-gray-300">{step}</span>
                  {index < project.architecture.flow.length - 1 && (
                    <span className="text-gray-500">↓</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Contribution */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-white mb-2">My Contribution</h3>
        <p className="text-gray-300">{project.contribution}</p>
      </div>

      {/* Challenge */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-white mb-2">Key Challenge</h3>
        <p className="text-gray-300">{project.challenge}</p>
      </div>

      {/* Repository */}
      {project.repository && (
        <div>
          <h3 className="text-lg font-semibold text-white mb-2">Repository</h3>
          <a
            href={project.repository}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#3b82f6] hover:text-[#60a5fa] transition-colors"
          >
            {project.repository}
          </a>
        </div>
      )}
    </div>
  );
};

export default ProjectDetails;