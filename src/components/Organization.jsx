import React from 'react';
import { HeartHandshake, Globe, Award } from 'lucide-react';

const Organization = () => {
  return (
    <section id="learn-more" className="py-24 bg-teal-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-gray-900 tracking-tight sm:text-4xl">About Our Organization</h2>
          <p className="mt-4 text-lg text-gray-600">
            We are a non-profit organization dedicated to democratizing healthcare access across rural communities by connecting those in need with volunteering medical professionals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="bg-white rounded-2xl p-8 text-center shadow-sm border border-gray-100 hover:-translate-y-1 transition-transform duration-300">
            <div className="w-14 h-14 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Globe size={28} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Our Mission</h3>
            <p className="text-gray-600">
              To bridge the rural-urban healthcare divide by leveraging telemedicine and a network of compassionate doctors.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl p-8 text-center shadow-sm border border-gray-100 hover:-translate-y-1 transition-transform duration-300">
            <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <HeartHandshake size={28} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Community First</h3>
            <p className="text-gray-600">
              Every patient matters. We ensure that quality healthcare reaches the most remote locations free of cost.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-8 text-center shadow-sm border border-gray-100 hover:-translate-y-1 transition-transform duration-300">
            <div className="w-14 h-14 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <Award size={28} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Verified Excellence</h3>
            <p className="text-gray-600">
              Our volunteers are certified medical practitioners committed to providing the highest standard of care and guidance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Organization;
