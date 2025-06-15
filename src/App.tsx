import React, { useState } from 'react';
import { Mail, MapPin, Play, Book, Briefcase, Phone, User, Globe, Music, ChevronRight, Github, Linkedin, ExternalLink, ArrowUpRight } from 'lucide-react';

function App() {
  const [activeCase, setActiveCase] = useState(0);

  const caseStudies = [
    {
      title: "EdTech Platform Redesign",
      company: "UNext Learning",
      category: "B2B SaaS",
      impact: "40% increase in user engagement",
      description: "Led the complete redesign of the learning management system, focusing on improving user experience and reducing course completion time.",
      image: "https://images.pexels.com/photos/5428836/pexels-photo-5428836.jpeg?auto=compress&cs=tinysrgb&w=600",
      tags: ["UX Research", "Product Strategy", "A/B Testing"]
    },
    {
      title: "Healthcare Marketplace",
      company: "EXXAT",
      category: "Healthcare",
      impact: "60% reduction in booking time",
      description: "Developed a comprehensive healthcare marketplace connecting patients with specialists, streamlining the appointment booking process.",
      image: "https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=600",
      tags: ["Product Design", "User Journey", "Mobile First"]
    },
    {
      title: "OT Marketplace Growth",
      company: "OT Marketplace",
      category: "Marketplace",
      impact: "3x growth in active users",
      description: "Implemented growth strategies and product optimizations that tripled the platform's active user base over 18 months.",
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600",
      tags: ["Growth Hacking", "Analytics", "Conversion Optimization"]
    }
  ];

  const experiences = [
    {
      title: "Product Manager, EXXAT",
      period: "08/2024 — Present",
      current: true
    },
    {
      title: "Sr. Product Manager, UNext",
      period: "04/2024 — 07/2024"
    },
    {
      title: "Product Manager, UNext",
      period: "08/2022 — 03/2024"
    },
    {
      title: "PM, OT Marketplace",
      period: "01/2020 — 07/2022"
    },
    {
      title: "Growth, OT Marketplace",
      period: "05/2017 — 12/2019"
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
                <div className="bg-gray-50 rounded-3xl p-6 border-2 border-white hover:shadow-xl transition-shadow relative">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="bg-white rounded-lg px-3 py-1">
                      <span className="text-xs text-gray-500">My Experience</span>
                    </div>
                  </div>
                  <div className="relative">
                    <div className="h-48 overflow-y-auto scrollbar-hide space-y-4">
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
                    {/* Fade overlay at bottom */}
                    <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-gray-50 to-transparent pointer-events-none"></div>
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
                      src="/blr-map.png" 
                      alt="Bengaluru map" 
                      className="w-full h-32 object-cover rounded-xl mb-4"
                      onError={(e) => {
                        // Fallback to a Bengaluru image from Pexels if the map doesn't load
                        e.currentTarget.src = "https://images.pexels.com/photos/789750/pexels-photo-789750.jpeg?auto=compress&cs=tinysrgb&w=400";
                      }}
                    />
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">BENGALURU</h3>
                    <p className="text-sm text-gray-500 mb-1">INDIA</p>
                    <p className="text-xs text-gray-400">12.9696°N, 77.6477°E</p>
                  </div>
                </div>

                {/* Reading Card - moved to third position */}
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

                {/* Music Card - moved to fourth position */}
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

                {/* Product Case Studies Card - spans 2 columns on larger screens */}
                <div className="lg:col-span-2 bg-gray-100 rounded-3xl border-2 border-white p-6 hover:shadow-xl transition-shadow">
                  <div className="flex items-center justify-between mb-6">
                    <div className="bg-white rounded-lg px-3 py-1">
                      <span className="text-xs text-gray-500">Product Case Studies</span>
                    </div>
                    <div className="flex items-center gap-1 text-xs text-gray-500 cursor-pointer hover:text-gray-700 transition-colors">
                      <span>View All</span>
                      <ExternalLink size={12} />
                    </div>
                  </div>
                  
                  {/* Case Study Navigation */}
                  <div className="flex flex-wrap gap-2 mb-6 bg-white rounded-lg p-2">
                    {caseStudies.map((study, index) => (
                      <button
                        key={index}
                        onClick={() => setActiveCase(index)}
                        className={`px-4 py-2 rounded-lg text-xs transition-colors ${
                          activeCase === index 
                            ? 'bg-black text-white' 
                            : 'text-gray-500 hover:bg-gray-100'
                        }`}
                      >
                        {study.company}
                      </button>
                    ))}
                  </div>

                  {/* Active Case Study Content */}
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <img 
                        src={caseStudies[activeCase].image}
                        alt={caseStudies[activeCase].title}
                        className="w-16 h-16 rounded-xl object-cover flex-shrink-0"
                      />
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="text-sm font-medium text-gray-900">
                            {caseStudies[activeCase].title}
                          </h3>
                          <span className="text-xs bg-orange-100 text-orange-600 px-2 py-1 rounded-full">
                            {caseStudies[activeCase].category}
                          </span>
                        </div>
                        <p className="text-xs text-gray-600 leading-relaxed mb-3">
                          {caseStudies[activeCase].description}
                        </p>
                        <div className="flex items-center justify-between">
                          <div className="flex flex-wrap gap-1">
                            {caseStudies[activeCase].tags.map((tag, tagIndex) => (
                              <span key={tagIndex} className="text-xs bg-gray-200 text-gray-600 px-2 py-1 rounded-full">
                                {tag}
                              </span>
                            ))}
                          </div>
                          <div className="text-xs font-medium text-green-600">
                            {caseStudies[activeCase].impact}
                          </div>
                        </div>
                      </div>
                    </div>
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