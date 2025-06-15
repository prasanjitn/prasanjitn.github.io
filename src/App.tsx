import React, { useState } from 'react';
import { Mail, MapPin, Play, Book, Briefcase, Phone, User, Globe, Music, ChevronRight, Github, Linkedin } from 'lucide-react';

function App() {
  const [activeStep, setActiveStep] = useState(0);

  const workSteps = [
    {
      title: "01 Discovery Call",
      description: "In the first stage, we'll have a Discovery Call to discuss your goals, needs, and project requirements. This helps us align our vision and set the foundation for a successful collaboration."
    },
    {
      title: "02 Research & Analysis",
      description: "We dive deep into user research, market analysis, and competitive landscape to understand the problem space and identify opportunities for innovation."
    },
    {
      title: "03 Design & Prototype",
      description: "Creating wireframes, user flows, and high-fidelity prototypes to visualize the solution and test ideas before development begins."
    },
    {
      title: "04 Development",
      description: "Building the product with clean, scalable code while maintaining close collaboration between design and development teams."
    },
    {
      title: "05 Launch & Iterate",
      description: "Deploying the solution and continuously improving based on user feedback and performance metrics."
    }
  ];

  const experiences = [
    {
      title: "Senior Product Lead at Apple",
      period: "2025 - Remote - Full time",
      current: true
    },
    {
      title: "Product Lead at Apple",
      period: "2024 - On site - Full time"
    },
    {
      title: "Product Designer at Apple",
      period: "2023 - Hybrid - Part time"
    },
    {
      title: "UI-UX Designer at Apple",
      period: "2022 - Remote - Full time"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50" style={{ fontFamily: 'Manrope, sans-serif' }}>
      <div className="w-[60%] mx-auto">
        {/* Top Section */}
        <div className="flex justify-between items-center py-6 px-8">
          <div className="text-lg font-semibold text-gray-900">
            Portfolio
          </div>
          <div className="flex items-center gap-6">
            <Mail size={20} className="text-gray-600 hover:text-gray-900 cursor-pointer transition-colors" />
            <Github size={20} className="text-gray-600 hover:text-gray-900 cursor-pointer transition-colors" />
            <Linkedin size={20} className="text-gray-600 hover:text-gray-900 cursor-pointer transition-colors" />
          </div>
        </div>

        {/* Main Content */}
        <div className="bg-gray-50 overflow-hidden">
          <div className="relative">
            <div className="relative p-8 md:p-12">
              {/* Header Section */}
              <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
                <div className="text-left flex-1">
                  <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                    Hi, I'm <span className="text-orange-500">Prasanjit!</span>
                  </h1>
                  <h2 className="text-3xl md:text-4xl font-semibold text-gray-700 mb-4">
                    <span style={{ color: '#dfdfdf' }}>I'm a</span> <span className="text-gray-900">Product Manager</span> <span style={{ color: '#dfdfdf' }}>at</span>
                  </h2>
                  <div className="flex items-center gap-4 mb-6">
                    <h3 className="text-3xl md:text-4xl font-semibold text-orange-500">Exxat.</h3>
                    <div className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-sm text-gray-600">Building Products</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex-shrink-0 pr-8">
                  <img 
                    src="/profile111.png" 
                    alt="Prasanjit" 
                    className="w-28 h-28 rounded-3xl object-cover border-4 border-white shadow-2xl"
                  />
                </div>
              </div>

              {/* CTA Section */}
              <div className="flex flex-col md:flex-row items-center gap-6 mb-12 p-6 bg-gray-50 rounded-2xl">
                <button className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-colors flex items-center gap-2">
                  <Phone size={16} />
                  Book a call
                </button>
                <p className="text-gray-600 text-center md:text-left">
                  Feel free to explore my portfolio and reach out—I'd love to connect!
                </p>
              </div>

              {/* Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Experience Card */}
                <div className="bg-gray-50 rounded-3xl p-6 border-2 border-white hover:shadow-xl transition-shadow">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="bg-white rounded-lg px-3 py-1">
                      <span className="text-xs text-gray-500">My Experience</span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    {experiences.map((exp, index) => (
                      <div key={index} className="flex gap-3">
                        <div className="flex-shrink-0 mt-1">
                          <div className={`w-2 h-2 rounded-full ${exp.current ? 'bg-orange-500' : 'bg-gray-300'}`}></div>
                          {index < experiences.length - 1 && <div className="w-0.5 h-8 bg-gray-200 ml-0.5 mt-1"></div>}
                        </div>
                        <div>
                          <h4 className={`text-sm font-medium ${exp.current ? 'text-gray-900' : 'text-gray-600'}`}>
                            {exp.title}
                          </h4>
                          <p className="text-xs text-gray-400">{exp.period}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Location Card */}
                <div className="bg-gray-50 rounded-3xl border-2 border-white overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="bg-white rounded-lg px-3 py-1">
                        <span className="text-xs text-gray-500">Map</span>
                      </div>
                    </div>
                  </div>
                  <div className="px-4 pb-4">
                    <img 
                      src="https://images.pexels.com/photos/3631430/pexels-photo-3631430.jpeg?auto=compress&cs=tinysrgb&w=400" 
                      alt="Montreal skyline" 
                      className="w-full h-32 object-cover rounded-xl mb-4"
                    />
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">MONTREAL</h3>
                    <p className="text-sm text-gray-500 mb-1">CANADA</p>
                    <p className="text-xs text-gray-400">45.5017°N, 73.5673°W</p>
                  </div>
                </div>

                {/* Music Card */}
                <div className="bg-gray-50 rounded-3xl border-2 border-white overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="p-4">
                    <div className="bg-white rounded-lg px-3 py-1 mb-4 inline-block">
                      <span className="text-xs text-gray-500">My music playlist</span>
                    </div>
                  </div>
                  <div className="px-4 pb-4">
                    <img 
                      src="https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=400" 
                      alt="Music playlist cover" 
                      className="w-full h-32 object-cover rounded-xl mb-4"
                    />
                    <h3 className="text-sm font-medium text-gray-900 mb-1">Alex Playlist</h3>
                    <div className="flex items-center gap-1 text-xs text-gray-500">
                      <Play size={12} />
                      <span>Play on Spotify</span>
                    </div>
                  </div>
                </div>

                {/* Reading Card */}
                <div className="bg-gray-100 rounded-3xl border-2 border-white p-6 hover:shadow-xl transition-shadow">
                  <div className="bg-white rounded-xl border border-gray-100 px-3 py-1 mb-4 inline-block">
                    <span className="text-xs text-gray-500">What I'm reading</span>
                  </div>
                  <h3 className="text-sm font-medium text-gray-900 mb-2 leading-tight">
                    Dieter Rams: The Complete Works
                  </h3>
                  <p className="text-xs text-gray-400 mb-4">Klaus Klemp</p>
                  <img 
                    src="https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=300" 
                    alt="Design book" 
                    className="w-24 h-20 object-cover rounded-lg"
                  />
                </div>

                {/* Work Process Card - spans 2 columns on larger screens */}
                <div className="lg:col-span-2 bg-gray-100 rounded-3xl border-2 border-white p-6 hover:shadow-xl transition-shadow">
                  <div className="flex items-center gap-2 mb-6">
                    <div className="bg-white rounded-lg px-3 py-1">
                      <span className="text-xs text-gray-500">How I work</span>
                    </div>
                  </div>
                  
                  {/* Step Navigation */}
                  <div className="flex flex-wrap gap-2 mb-6 bg-white rounded-lg p-2">
                    {workSteps.map((step, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveStep(index)}
                        className={`px-4 py-2 rounded-lg text-xs transition-colors ${
                          activeStep === index 
                            ? 'bg-black text-white' 
                            : 'text-gray-500 hover:bg-gray-100'
                        }`}
                      >
                        Step {String(index + 1).padStart(2, '0')}
                      </button>
                    ))}
                  </div>

                  {/* Active Step Content */}
                  <div className="space-y-3">
                    <h3 className="text-sm font-medium text-gray-900">
                      {workSteps[activeStep].title}
                    </h3>
                    <p className="text-xs text-gray-600 leading-relaxed">
                      {workSteps[activeStep].description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;