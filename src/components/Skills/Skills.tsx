import { skills } from '../../data/skills';

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-[#0a1628]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skillGroup) => (
            <div key={skillGroup.category} className="bg-[#0f1a2e] rounded-lg border border-[#1a2a4a] p-6 hover:border-[#3b82f6] transition-colors duration-300">
              <h3 className="text-lg font-semibold text-white mb-4">
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-[#1a2a4a] text-gray-300 rounded-full text-sm border border-[#2a3a5a]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;