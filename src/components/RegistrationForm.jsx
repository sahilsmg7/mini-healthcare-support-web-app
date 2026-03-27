import React, { useState } from 'react';
import { Stethoscope, Phone, Mail, User, Save, AlertCircle } from 'lucide-react';

const InputField = ({ label, name, type, icon: Icon, placeholder, error, value, onChange }) => (
  <div className="mb-5 relative">
    <label className="block text-sm font-medium text-gray-700 mb-2">{label}</label>
    <div className="relative rounded-lg shadow-sm">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <Icon className="h-5 w-5 text-teal-500" />
      </div>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className={`block w-full pl-10 pr-4 py-3 bg-gray-50 border rounded-lg focus:ring-2 focus:outline-none transition-colors ${
          error 
            ? 'border-red-300 focus:ring-red-200 focus:border-red-500' 
            : 'border-gray-200 focus:ring-teal-100 focus:border-teal-500 hover:border-teal-300'
        }`}
        placeholder={placeholder}
      />
      {error && (
        <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
          <AlertCircle className="h-5 w-5 text-red-500" />
        </div>
      )}
    </div>
    {error && <p className="mt-1.5 text-sm text-red-600 font-medium">{error}</p>}
  </div>
);

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    specialization: '',
    contact: '',
    email: '',
    experience: ''
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.specialization.trim()) newErrors.specialization = 'Specialization is required';
    if (!formData.contact.trim() || formData.contact.length < 10) newErrors.contact = 'Valid contact number is required';
    if (!formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = 'Valid email is required';
    if (!formData.experience || formData.experience < 1) newErrors.experience = 'Experience must be at least 1 year';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log('Form data to submit:', formData);
      setIsSubmitted(true);
      // Optional: reset form after a delay or show success state
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: '', specialization: '', contact: '', email: '', experience: '' });
      }, 5000);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error for field as they type
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: undefined }));
  };

  return (
    <section id="volunteer" className="py-24 bg-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 relative">
          
          <div className="absolute top-0 left-0 w-2 h-full bg-teal-500"></div>

          <div className="p-8 sm:p-12">
            <div className="mb-10 text-center sm:text-left">
              <h2 className="text-3xl font-bold text-gray-900 tracking-tight">Volunteer Registration</h2>
              <p className="mt-2 text-gray-500">Join our network of healthcare professionals making a difference.</p>
            </div>

            {isSubmitted ? (
               <div className="bg-teal-50 border border-teal-200 p-8 rounded-xl text-center">
                 <div className="w-16 h-16 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                   <Save size={32} />
                 </div>
                 <h3 className="text-xl font-semibold text-teal-800 mb-2">Registration Successful!</h3>
                 <p className="text-teal-600">Thank you for volunteering with Arogya Seva. Our team will contact you shortly to verify your profile.</p>
               </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2">
                  <InputField label="Full Name" name="name" type="text" icon={User} placeholder="Dr. Jane Doe" error={errors.name} value={formData.name} onChange={handleChange} />
                  <InputField label="Specialization" name="specialization" type="text" icon={Stethoscope} placeholder="General Physician, Pediatrician..." error={errors.specialization} value={formData.specialization} onChange={handleChange} />
                  <InputField label="Contact Number" name="contact" type="tel" icon={Phone} placeholder="+1 (555) 000-0000" error={errors.contact} value={formData.contact} onChange={handleChange} />
                  <InputField label="Email Address" name="email" type="email" icon={Mail} placeholder="doctor@example.com" error={errors.email} value={formData.email} onChange={handleChange} />
                  <div className="sm:col-span-2">
                    <InputField label="Years of Experience" name="experience" type="number" icon={Stethoscope} placeholder="5" error={errors.experience} value={formData.experience} onChange={handleChange} />
                  </div>
                </div>

                <div className="mt-8">
                  <button
                    type="submit"
                    className="w-full flex justify-center items-center gap-2 py-4 px-4 rounded-xl border border-transparent shadow-md text-sm font-semibold text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition-colors"
                  >
                    <Save size={18} />
                    Complete Registration
                  </button>
                </div>
                <p className="text-xs text-center text-gray-400 mt-6">By clicking complete, you agree to our verification process and terms of service.</p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegistrationForm;
