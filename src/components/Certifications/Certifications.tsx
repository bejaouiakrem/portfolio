import { certifications } from '../../data/certifications';

const Certifications = () => {
  const completed = certifications.filter(c => c.status === 'Completed');
  const inProgress = certifications.filter(c => c.status === 'In Progress');

  return (
    <section id="certifications" className="py-20 bg-[#0a1628]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">Certifications</h2>
        
        {completed.length > 0 && (
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-[#60a5fa] mb-4">✅ Completed</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {completed.map((cert) => (
                <div key={cert.name} className="bg-[#0f1a2e] rounded-lg border border-[#1a2a4a] p-4">
                  <h4 className="text-white font-medium">{cert.name}</h4>
                  <p className="text-gray-400 text-sm">{cert.issuer}</p>
                  {cert.date && (
                    <p className="text-gray-500 text-sm mt-1">Issued: {cert.date}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {inProgress.length > 0 && (
          <div>
            <h3 className="text-xl font-semibold text-[#fbbf24] mb-4">🔄 In Progress</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {inProgress.map((cert) => (
                <div key={cert.name} className="bg-[#0f1a2e] rounded-lg border border-[#1a2a4a] p-4">
                  <h4 className="text-white font-medium">{cert.name}</h4>
                  <p className="text-gray-400 text-sm">{cert.issuer}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Certifications;