import React from 'react';
import Layout from './components/Layout';
import Hero from './components/Hero';
import RegistrationForm from './components/RegistrationForm';
import Chatbot from './components/Chatbot';
import Organization from './components/Organization';
import AboutUs from './components/AboutUs';
import AITriage from './components/AITriage';

function App() {
  return (
    <Layout>
      {/* Home / Hero Section */}
      <Hero />
      
      {/* Spacer or Divider */}
      <div className="h-16 bg-gradient-to-b from-white to-gray-50"></div>
      
      {/* Organization / Learn More Section */}
      <Organization />
      
      {/* About Us Section */}
      <AboutUs />
      
      {/* AI Symptom Analyzer */}
      <AITriage />
      
      {/* Volunteer Registration Form */}
      <RegistrationForm />
      
      {/* Floating Chatbot Widget */}
      <Chatbot />
    </Layout>
  );
}

export default App;
