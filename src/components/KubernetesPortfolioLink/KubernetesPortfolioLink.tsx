import { Terminal } from 'lucide-react';

const KubernetesPortfolioLink = () => {
  return (
    <section className="py-16 bg-[#0f1a2e] border-y border-[#1a2a4a]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#1a2a4a] rounded-full text-sm text-gray-400 mb-4">
            <Terminal size={16} />
            <span>⚡ Alternative Experience</span>
          </div>
          
          <h3 className="text-2xl font-semibold text-white mb-3">
            Explore my portfolio in a different way
          </h3>
          
          <p className="text-gray-400 max-w-2xl mx-auto mb-6 leading-relaxed">
            If you prefer a more <strong className="text-white">technical</strong> and 
            <strong className="text-white"> interactive</strong> navigation, try my 
            Kubernetes‑themed portfolio where you explore projects, skills, and certifications 
            using <code className="bg-[#1a2a4a] px-2 py-0.5 rounded text-[#60a5fa]">kubectl</code>-style commands.
          </p>
          
          <p className="text-sm text-gray-500 mb-6">
            You can keep browsing this site, or jump into the terminal experience.
          </p>
          
          <a 
            href="https://akrem-k8s-portfolio.netlify.app" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#3b82f6] hover:bg-[#2563eb] text-white font-medium rounded-lg transition-colors duration-200"
          >
            <Terminal size={18} />
            Enter Kubernetes Mode →
          </a>
        </div>
      </div>
    </section>
  );
};

export default KubernetesPortfolioLink;