import { Github , Linkedin, Mail, FileDown } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 pb-12 bg-[#0a1628]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-block px-4 py-1.5 bg-[#3b82f6]/10 border border-[#3b82f6]/20 rounded-full text-[#60a5fa] text-sm font-medium mb-6">
            Open to Cloud & DevOps Opportunities
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
            Akrem Bejaoui
          </h1>
          
          <h2 className="text-2xl sm:text-3xl text-gray-300 mb-6">
            IT Engineering Student
            <span className="block text-[#3b82f6] mt-1">Cloud & DevOps</span>
          </h2>

          <p className="text-lg text-gray-400 mb-8 max-w-2xl">
            Building and automating reliable infrastructure with Linux, Kubernetes, CI/CD, and cloud technologies.
          </p>

          {/* Currently focused on */}
          <div className="flex flex-wrap gap-2 mb-10">
            <span className="px-3 py-1 bg-[#0f1a2e] border border-[#1a2a4a] rounded-full text-sm text-gray-300">Cloud Computing</span>
            <span className="px-3 py-1 bg-[#0f1a2e] border border-[#1a2a4a] rounded-full text-sm text-gray-300">DevOps</span>
            <span className="px-3 py-1 bg-[#0f1a2e] border border-[#1a2a4a] rounded-full text-sm text-gray-300">Kubernetes</span>
            <span className="px-3 py-1 bg-[#0f1a2e] border border-[#1a2a4a] rounded-full text-sm text-gray-300">SRE</span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <a href="#projects" className="px-6 py-3 bg-[#3b82f6] hover:bg-[#2563eb] text-white font-medium rounded-lg transition-colors duration-200">
              View Projects
            </a>
            <a 
              href="#" 
              className="px-6 py-3 border border-[#1a2a4a] hover:border-[#3b82f6] text-gray-300 hover:text-white font-medium rounded-lg transition-colors duration-200 flex items-center gap-2"
            >
              <FileDown size={18} />
              Download CV
            </a>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 mt-8">
            <a 
              href="https://github.com/bejaouiakrem" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors p-2 bg-[#0f1a2e] rounded-lg border border-[#1a2a4a] hover:border-[#3b82f6]"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://linkedin.com/in/bejaoui-akrem-a76861364" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors p-2 bg-[#0f1a2e] rounded-lg border border-[#1a2a4a] hover:border-[#3b82f6]"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="mailto:akrem.bejaoui@esprit.tn"
              className="text-gray-400 hover:text-white transition-colors p-2 bg-[#0f1a2e] rounded-lg border border-[#1a2a4a] hover:border-[#3b82f6]"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;