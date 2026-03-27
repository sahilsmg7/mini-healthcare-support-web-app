import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, User } from 'lucide-react';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, text: 'Hello! I am the Arogya Seva AI Assistant. How can I help you today?', sender: 'bot' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef(null);

  const predefinedFAQs = {
    'how do i book': 'To book a consultation, simply click the "Find a Doctor" button on our portal or call our rural helpline at 1-800-AROGYA.',
    'what services are free': 'All tele-consultations and basic triage services are completely free for patients from verified rural areas.',
    'how to volunteer': 'Doctors can volunteer by filling out the Registration Form on our website. Our team will verify credentials within 48 hours.',
    'emergency': 'This platform is for non-emergency consultations. For immediate medical emergencies, please call your local emergency services (112 or 911 immediately).',
    'default': 'I am a simple AI assistant. I can answer questions like "How do I book a consultation?", "What services are free?", or "How to volunteer?".'
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userMessage = { id: Date.now(), text: inputValue, sender: 'user' };
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');

    // Simulate AI response
    setTimeout(() => {
      const lowercaseMsg = userMessage.text.toLowerCase();
      let responseText = predefinedFAQs['default'];

      // Simple keyword matching
      for (const [key, value] of Object.entries(predefinedFAQs)) {
        if (key !== 'default' && lowercaseMsg.includes(key)) {
          responseText = value;
          break;
        }
      }

      const botResponse = { id: Date.now() + 1, text: responseText, sender: 'bot' };
      setMessages(prev => [...prev, botResponse]);
    }, 600);
  };

  return (
    <>
      {/* Floating Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-xl transition-all hover:scale-105 z-50 flex items-center justify-center animate-bounce-slow"
        >
          <MessageSquare size={24} />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl border border-gray-100 z-50 overflow-hidden flex flex-col h-[500px] max-h-[80vh]">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-teal-500 text-white p-4 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="bg-white/20 p-1.5 rounded-lg">
                <Bot size={20} />
              </div>
              <div>
                <h3 className="font-semibold text-sm">AI Triage Assistant</h3>
                <p className="text-xs text-blue-100">Online | Arogya Seva</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white hover:text-gray-200 transition-colors">
              <X size={20} />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 p-4 overflow-y-auto bg-slate-50">
            {messages.map((msg) => (
              <div key={msg.id} className={`flex mb-4 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                {msg.sender === 'bot' && (
                   <div className="w-8 h-8 rounded-full bg-teal-100 text-teal-600 flex items-center justify-center mr-2 flex-shrink-0 mt-1">
                     <Bot size={16} />
                   </div>
                )}
                <div 
                  className={`max-w-[75%] p-3 rounded-2xl text-sm ${
                    msg.sender === 'user' 
                      ? 'bg-blue-600 text-white rounded-br-none' 
                      : 'bg-white border border-gray-200 text-gray-700 rounded-bl-none shadow-sm'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 bg-white border-t border-gray-100">
            <form onSubmit={handleSendMessage} className="flex items-center gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask me something..."
                className="flex-1 bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              />
              <button 
                type="submit" 
                disabled={!inputValue.trim()}
                className="bg-teal-500 text-white p-2.5 rounded-xl hover:bg-teal-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
