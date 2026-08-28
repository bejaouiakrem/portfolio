import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#0a1628] border-t border-[#1a2a4a] py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Akrem Bejaoui. All rights reserved.
          </p>
          
          <div className="flex gap-4 mt-4 md:mt-0">
            <a 
              href="https://github.com/bejaouiakrem" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-300 transition-colors"
            >
              <Github size={18} />
            </a>
            <a 
              href="https://linkedin.com/in/bejaoui-akrem-a76861364" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-300 transition-colors"
            >
              <Linkedin size={18} />
            </a>
            <a 
              href="mailto:akrem.bejaoui@esprit.tn"
              className="text-gray-500 hover:text-gray-300 transition-colors"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;