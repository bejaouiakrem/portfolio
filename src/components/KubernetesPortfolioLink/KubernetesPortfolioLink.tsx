import { Terminal } from 'lucide-react';

const KubernetesPortfolioLink = () => {
  return (
    <section className="py-12 bg-[#0f1a2e] border-y border-[#1a2a4a]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#1a2a4a] rounded-full text-sm text-gray-400 mb-4">
            <Terminal size={16} />
            <span>Technical playground</span>
          </div>
          
          <h3 className="text-xl font-semibold text-white mb-3">
            Want to explore my portfolio differently?
          </h3>
          
          <p className="text-gray-400 max-w-xl mx-auto mb-6">
            I also built an interactive Kubernetes-themed portfolio where you can explore 
            my projects using kubectl-style commands.
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