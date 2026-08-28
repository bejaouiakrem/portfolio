import { Github, Linkedin, Mail, FileDown } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-[#0a1628]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">Contact</h2>
        
        <div className="max-w-2xl">
          <p className="text-xl text-gray-300 mb-6">
            Interested in working together? Let's connect.
          </p>
          
          <div className="space-y-4">
            {/* Email */}
            <a 
              href="mailto:akrem.bejaoui@esprit.tn"
              className="flex items-center gap-4 p-4 bg-[#0f1a2e] rounded-lg border border-[#1a2a4a] hover:border-[#3b82f6] transition-colors duration-300 group"
            >
              <Mail className="text-[#3b82f6]" size={24} />
              <div>
                <p className="text-gray-400 text-sm">Email</p>
                <p className="text-white group-hover:text-[#60a5fa] transition-colors">
                  akrem.bejaoui@esprit.tn
                </p>
              </div>
            </a>

            {/* LinkedIn */}
            <a 
              href="https://linkedin.com/in/bejaoui-akrem-a76861364"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 bg-[#0f1a2e] rounded-lg border border-[#1a2a4a] hover:border-[#3b82f6] transition-colors duration-300 group"
            >
              <Linkedin className="text-[#3b82f6]" size={24} />
              <div>
                <p className="text-gray-400 text-sm">LinkedIn</p>
                <p className="text-white group-hover:text-[#60a5fa] transition-colors">
                  linkedin.com/in/bejaoui-akrem-a76861364
                </p>
              </div>
            </a>

            {/* GitHub */}
            <a 
              href="https://github.com/bejaouiakrem"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 bg-[#0f1a2e] rounded-lg border border-[#1a2a4a] hover:border-[#3b82f6] transition-colors duration-300 group"
            >
              <Github className="text-[#3b82f6]" size={24} />
              <div>
                <p className="text-gray-400 text-sm">GitHub</p>
                <p className="text-white group-hover:text-[#60a5fa] transition-colors">
                  github.com/bejaouiakrem
                </p>
              </div>
            </a>

            {/* CV */}
            <a 
              href="#"
              className="flex items-center gap-4 p-4 bg-[#0f1a2e] rounded-lg border border-[#1a2a4a] hover:border-[#3b82f6] transition-colors duration-300 group"
            >
              <FileDown className="text-[#3b82f6]" size={24} />
              <div>
                <p className="text-gray-400 text-sm">CV</p>
                <p className="text-white group-hover:text-[#60a5fa] transition-colors">
                  Download CV
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;