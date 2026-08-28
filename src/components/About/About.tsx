const About = () => {
  return (
    <section id="about" className="py-20 bg-[#0f1a2e]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">About Me</h2>
        
        <div className="max-w-3xl space-y-4 text-gray-300 leading-relaxed">
          <p>
            I'm an IT Engineering student at ESPRIT Tunis with a strong interest in 
            Cloud Computing, DevOps, Kubernetes, and Site Reliability Engineering (SRE).
          </p>
          <p>
            My background is in software development, but I'm gradually moving toward 
            the infrastructure and platform side of engineering — learning how applications 
            are built, containerized, deployed, automated, and operated.
          </p>
          <p>
            I'm particularly interested in Linux, Kubernetes, cloud infrastructure, 
            CI/CD, GitOps, and reliability. My goal is to understand how the different 
            pieces fit together and how they can be used to build systems that are 
            easier to deploy, maintain, and troubleshoot.
          </p>
          <p className="text-[#60a5fa] font-medium pt-2">
            🎯 Currently looking for Cloud/DevOps internship or entry-level opportunities.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;