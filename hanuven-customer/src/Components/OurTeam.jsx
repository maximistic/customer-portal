import ram from '../Components/Assets/RamKumar.jpg';

function OurTeam() {
  const teamMembers = [
    { name: 'Ram Kumar', role: 'CEO', image: ram },
    { name: 'Jane Smith', role: 'CTO', image: ram },
    { name: 'Mike Johnson', role: 'Designer', image: ram },
    { name: 'Emily Brown', role: 'Marketing', image: ram },
  ];

  return (
    <section className="py-16 bg-gray-100 " id="team">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-gray-800 mb-10 text-center">Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 cursor-pointer">
          {teamMembers.map((member, index) => (
            <div 
              key={index} 
              className="cursor-pointer text-center bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl"
            >
              <img 
                src={member.image} 
                alt={member.name} 
                className="cursor-pointer w-36 h-36 object-cover rounded-full mx-auto mb-6"
              />
              <h3 className="cursor-pointer text-xl font-semibold mb-2">{member.name}</h3>
              <p className="cursor-pointer text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurTeam;
