import React, { useState } from 'react';
import { Brain, Sparkles, Activity, AlertCircle, CheckCircle2 } from 'lucide-react';

const AITriage = () => {
  const [symptoms, setSymptoms] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [result, setResult] = useState(null);

  const analyzeSymptoms = (e) => {
    e.preventDefault();
    if (!symptoms.trim()) return;

    setIsAnalyzing(true);
    setResult(null);

    // Simulate AI processing delay
    setTimeout(() => {
      const text = symptoms.toLowerCase();
      let recommendation = {
        specialist: 'General Physician',
        urgency: 'Routine',
        advice: 'Based on your symptoms, a standard consultation is recommended.'
      };

      if (text.includes('chest') || text.includes('heart') || text.includes('breath')) {
        recommendation = {
          specialist: 'Cardiologist / Emergency',
          urgency: 'High / Emergency',
          advice: 'These symptoms could be serious. Please seek immediate medical attention or visit an ER.'
        };
      } else if (text.includes('headache') || text.includes('migraine') || text.includes('dizzy')) {
        recommendation = {
          specialist: 'Neurologist or General Physician',
          urgency: 'Routine',
          advice: 'Consider resting and hydrating. If symptoms persist severely, consult a doctor.'
        };
      } else if (text.includes('skin') || text.includes('rash') || text.includes('itch')) {
        recommendation = {
          specialist: 'Dermatologist',
          urgency: 'Routine',
          advice: 'A visual telemedicine checkup with a dermatologist is recommended.'
        };
      } else if (text.includes('stomach') || text.includes('pain') || text.includes('vomit')) {
        recommendation = {
          specialist: 'Gastroenterologist',
          urgency: 'Moderate',
          advice: 'Ensure you stay hydrated. A consultation is advised to diagnose the cause.'
        };
      }

      setResult(recommendation);
      setIsAnalyzing(false);
    }, 1500);
  };

  return (
    <section className="py-24 bg-gradient-to-b from-white to-blue-50/50 border-t border-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-semibold text-sm mb-6">
            <Sparkles size={18} />
            AI-Powered Feature
          </div>
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">Smart Symptom Analyzer</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Not sure which doctor to consult? Describe your symptoms below, and our AI will recommend the right specialist and urgency level instantly.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 flex flex-col md:flex-row">
          
          <div className="p-8 md:p-10 md:w-1/2 bg-teal-600 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 -translate-y-10 translate-x-10 opacity-10">
              <Brain size={250} />
            </div>
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-4">How it works</h3>
              <ul className="space-y-6">
                <li className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-teal-500 flex items-center justify-center shrink-0">1</div>
                  <p className="text-teal-50 mt-1">Type in your current symptoms in plain English.</p>
                </li>
                <li className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-teal-500 flex items-center justify-center shrink-0">2</div>
                  <p className="text-teal-50 mt-1">Our NLP engine processes keywords and maps them to medical specialties.</p>
                </li>
                <li className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-teal-500 flex items-center justify-center shrink-0">3</div>
                  <p className="text-teal-50 mt-1">Receive an instant triage recommendation to book the right doctor.</p>
                </li>
              </ul>
            </div>
          </div>

          <div className="p-8 md:p-10 md:w-1/2 bg-white flex flex-col justify-center">
            
            {!result ? (
              <form onSubmit={analyzeSymptoms}>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Describe your symptoms</label>
                <textarea 
                  rows={4}
                  className="w-full p-4 border border-gray-200 rounded-xl bg-gray-50 focus:bg-white focus:ring-2 focus:ring-teal-500 focus:border-teal-500 transition-all resize-none outline-none mb-4 text-gray-700"
                  placeholder="E.g. I have a severe headache and have been feeling dizzy since morning..."
                  value={symptoms}
                  onChange={(e) => setSymptoms(e.target.value)}
                ></textarea>
                
                <button 
                  type="submit" 
                  disabled={isAnalyzing || !symptoms.trim()}
                  className="w-full flex justify-center items-center gap-2 py-4 px-4 rounded-xl font-semibold text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isAnalyzing ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      Analyzing...
                    </>
                  ) : (
                    <>
                      <Activity size={20} />
                      Analyze Symptoms
                    </>
                  )}
                </button>
              </form>
            ) : (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center">
                    <CheckCircle2 size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">Analysis Complete</h3>
                </div>
                
                <div className="space-y-4 mb-8">
                  <div className="p-4 bg-gray-50 border border-gray-100 rounded-xl">
                    <p className="text-sm text-gray-500 font-medium mb-1">Recommended Specialist</p>
                    <p className="text-lg font-bold text-blue-700">{result.specialist}</p>
                  </div>
                  
                  <div className={`p-4 border rounded-xl ${
                    result.urgency.includes('High') ? 'bg-red-50 border-red-100' : 'bg-orange-50 border-orange-100'
                  }`}>
                    <div className="flex items-center gap-2 mb-1">
                      <AlertCircle size={16} className={result.urgency.includes('High') ? 'text-red-500' : 'text-orange-500'} />
                      <p className={`text-sm font-medium ${result.urgency.includes('High') ? 'text-red-600' : 'text-orange-600'}`}>Urgency Level</p>
                    </div>
                    <p className="font-bold text-gray-900">{result.urgency}</p>
                  </div>
                  
                  <p className="text-gray-600 text-sm bg-blue-50/50 p-4 rounded-xl border border-blue-100">
                    <span className="font-semibold block mb-1">AI Advice:</span>
                    {result.advice}
                  </p>
                </div>
                
                <button 
                  onClick={() => { setResult(null); setSymptoms(''); }}
                  className="text-teal-600 font-semibold text-sm hover:text-teal-700 transition-colors"
                >
                  ← Analyze another symptom
                </button>
              </div>
            )}

          </div>
        </div>
        
        <p className="text-center text-xs text-gray-400 mt-6 max-w-2xl mx-auto">
          Disclaimer: This AI Symptom Analyzer is for informational purposes only and does not replace professional medical advice, diagnosis, or treatment. Always consult a certified doctor for medical emergencies.
        </p>
      </div>
    </section>
  );
};

export default AITriage;
