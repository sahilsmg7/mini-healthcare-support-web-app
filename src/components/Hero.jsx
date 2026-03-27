import React, { useState, useEffect } from 'react';
import { ArrowRight, Activity, Users, ShieldCheck } from 'lucide-react';

const HERO_IMAGES = [
  "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1581056771107-24ca5f033842?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80",
  "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80"
];

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);
  return (
    <section className="relative overflow-hidden bg-white pt-16 pb-32">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 opacity-20 pointer-events-none">
        <div className="w-[800px] h-[800px] bg-teal-300 rounded-full blur-3xl mix-blend-multiply"></div>
      </div>
      <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 opacity-20 pointer-events-none">
        <div className="w-[600px] h-[600px] bg-blue-300 rounded-full blur-3xl mix-blend-multiply"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
          
          <div className="lg:col-span-6 text-center lg:text-left pt-12 lg:pt-0">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-50 border border-teal-100 text-sm font-medium text-teal-700 mb-8">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
              </span>
              Connecting Care, Everywhere
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight mb-6">
              Bridge the Gap in <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-blue-600">Rural Healthcare</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-500 mb-10 max-w-2xl mx-auto lg:mx-0">
              Arogya Seva connects compassionate city doctors with patients in remote areas. Your expertise can save lives where it's needed most.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="#volunteer" className="inline-flex justify-center items-center gap-2 px-8 py-4 rounded-xl bg-teal-600 text-white font-semibold shadow-lg shadow-teal-600/20 hover:bg-teal-700 hover:-translate-y-0.5 transition-all duration-200">
                Volunteer Now
                <ArrowRight size={20} />
              </a>
              <a href="#learn-more" className="inline-flex justify-center items-center px-8 py-4 rounded-xl bg-white text-gray-700 font-semibold border border-gray-200 hover:bg-gray-50 hover:border-gray-300 transition-all duration-200 shadow-sm">
                Learn More
              </a>
            </div>
            
            <div className="mt-12 flex items-center justify-center lg:justify-start gap-8 opacity-70">
              <div className="flex items-center gap-2 text-sm font-medium text-gray-600">
                <Users size={18} className="text-blue-500" />
                <span>10k+ Patients</span>
              </div>
              <div className="flex items-center gap-2 text-sm font-medium text-gray-600">
                <Activity size={18} className="text-teal-500" />
                <span>500+ Doctors</span>
              </div>
              <div className="flex items-center gap-2 text-sm font-medium text-gray-600">
                <ShieldCheck size={18} className="text-teal-500" />
                <span>Free Service</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 mt-16 lg:mt-0 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/20 bg-white">
              <div className="w-full h-[500px] relative">
                {HERO_IMAGES.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`Healthcare hero ${index}`}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                      index === currentImage ? "opacity-100" : "opacity-0"
                    }`}
                  />
                ))}
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0"></div>
              
              {/* Floating feature card */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-xl border border-white/50">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center flex-shrink-0">
                    <Activity className="text-teal-600" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 text-lg">Live Triage Network</h3>
                    <p className="text-sm text-gray-500 mt-1">Instant tele-consultations for urgent care.</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative dots grid */}
            <div className="absolute -top-6 -right-6 w-32 h-32 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-teal-500 via-transparent to-transparent bg-[length:10px_10px]" style={{backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)'}}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
