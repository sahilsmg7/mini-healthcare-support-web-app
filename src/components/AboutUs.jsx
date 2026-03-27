import React from 'react';
import { MapPin, History } from 'lucide-react';

const AboutUs = () => {
  return (
    <section id="about" className="py-24 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-sm font-medium text-blue-700 mb-6">
              <History size={16} />
              Our Story
            </div>
            <h2 className="text-3xl font-bold text-gray-900 tracking-tight sm:text-4xl mb-6">How Arogya Seva Was Founded</h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Founded with a simple vision, Arogya Seva started when a group of city doctors realized the immense healthcare disparity between urban centers and rural villages. We recognized that while talent and medicine were abundant in cities, rural areas critically lacked immediate access to specialists.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              By utilizing mobile technology and establishing a dedicated volunteer network, we have successfully brought tele-triage and expert medical advice directly to those who need it most, completely bridging the geographic gap.
            </p>
            
            <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-2xl border border-gray-100">
              <div className="w-12 h-12 bg-teal-100 text-teal-600 flex items-center justify-center rounded-full flex-shrink-0">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900">Our Central Hub</h3>
                <p className="text-gray-600 mt-2">
                  While our reach is nationwide, our operations are coordinated from our central location in <span className="font-semibold text-teal-700">Bangalore, India</span>. From here, our core team manages the technological infrastructure and verifies our volunteering doctors.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-16 lg:mt-0 relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-teal-100 to-blue-50 transform rounded-3xl rotate-3 scale-105 -z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1400&q=80" 
              alt="Medical team working together" 
              className="w-full rounded-3xl shadow-xl object-cover h-[500px]"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutUs;
