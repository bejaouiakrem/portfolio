import { journey } from '../../data/journey';

const Journey = () => {
  return (
    <section id="journey" className="py-20 bg-[#0f1a2e]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">Career Journey</h2>
        
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-[#1a2a4a] hidden md:block"></div>
          
          <div className="space-y-6">
            {journey.map((step, index) => (
              <div key={index} className="relative pl-8 md:pl-12">
                {/* Timeline dot */}
                <div className="absolute left-0 top-1.5 w-3 h-3 bg-[#3b82f6] rounded-full border-2 border-[#0f1a2e]"></div>
                
                <div className="bg-[#0a1628] rounded-lg border border-[#1a2a4a] p-4 hover:border-[#3b82f6] transition-colors duration-300">
                  <h3 className="text-lg font-semibold text-white">{step.title}</h3>
                  <p className="text-gray-400">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;