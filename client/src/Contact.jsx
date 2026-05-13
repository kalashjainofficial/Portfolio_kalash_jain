import React, { useRef, useState } from 'react';
import Header from './components/Header';
import { FaGithub } from 'react-icons/fa';
import { CiLinkedin, CiMail } from 'react-icons/ci';
import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef();
  const [status, setStatus] = useState('idle');

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus('sending');

    emailjs
      .sendForm(
        'service_9czquv9', // Replace with your EmailJS Service ID
        'template_7vd0a0n', // Replace with your EmailJS Template ID
        form.current,
        {
          publicKey: 'YajAGrBQL4Re_OGTm', // Replace with your EmailJS Public Key
        }
      )
      .then(
        () => {
          setStatus('success');
          form.current.reset();
        },
        (error) => {
          console.error('FAILED...', error.text);
          setStatus('error');
        }
      );
  };
const sendToServer = async (formData) => {
  try {
    const response = await fetch("http://localhost:3000", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    console.log(data);

  } catch (error) {
    console.log("Error:", error);
  }
};

const handleSubmit = async (e) => {
  e.preventDefault();

  const formData = {
    user_name: form.current.user_name.value,
    user_email: form.current.user_email.value,
    reason: form.current.reason.value,
    message: form.current.message.value,
  };

  await sendToServer(formData);
  sendEmail(e);
  

}

  return (
    <div className='h-screen bg-black'>
      <Header title='Contact' />

      <div className="flex-1 flex flex-col lg:flex-row items-center lg:items-stretch justify-center p-6 gap-10 bg-gradient-to-b from-[#000000] to-[#1e126d]">

        {/* Left Side: Info */}
        <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 max-w-md w-full text-center lg:text-left shadow-[0_0_30px_rgba(168,85,247,0.15)] flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-cyan-300 mb-6">Let’s build something worth remembering.</h2>
          <p className="text-white/70 mb-8 leading-relaxed text-lg">
            Building beyond what others believe is possible.
          </p>

          <div className="flex justify-center lg:justify-start gap-6 mt-8">
            <a href="https://github.com/kalashjainofficial" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-cyan-300 hover:scale-110 transition-all text-4xl">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/kalash-jain-87662927a/" target="_blank" rel="noopener noreferrer" className="text-white/60 hover:text-cyan-300 hover:scale-110 transition-all text-4xl">
              <CiLinkedin />
            </a>
            <a href="mailto:kalashjainofficial@gmail.com" className="text-white/60 hover:text-cyan-300 hover:scale-110 transition-all text-4xl">
              <CiMail />
            </a>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-8 max-w-lg w-full shadow-[0_0_30px_rgba(168,85,247,0.15)]"> 
          <form ref={form} onSubmit={handleSubmit}
           className="flex flex-col gap-5">
            <div>
              <label className="block text-cyan-300 text-sm font-semibold mb-2">Name</label>
              <input
                type="text"
                name="user_name"
                required
                placeholder="John Doe"
                className="w-full bg-black/50 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
              />
            </div>

            <div>
              <label className="block text-cyan-300 text-sm font-semibold mb-2">Email</label>
              <input
                type="email"
                name="user_email"
                required
                placeholder="john@example.com"
                className="w-full bg-black/50 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
              />
            </div>

            <div>
              <label className="block text-cyan-300 text-sm font-semibold mb-2">Reason to Contact</label>
              <input
                type="text"
                name="reason"
                required
                placeholder="Job Opportunity, Freelance, Networking..."
                className="w-full bg-black/50 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
              />
            </div>

            <div>
              <label className="block text-cyan-300 text-sm font-semibold mb-2">Message</label>
              <textarea
                name="message"
                required
                rows="4"
                placeholder="Hello Kalash, I would like to discuss..."
                className="w-full bg-black/50 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={status === 'sending'}
              className="mt-2 w-full bg-cyan-400/10 text-cyan-300 border border-cyan-400/50 font-bold py-3 px-4 rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex justify-center items-center cursor-pointer"
            >
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>

            {status === 'success' && (
              <p className="text-green-400 text-sm text-center mt-2">Message sent successfully! I'll get back to you soon.</p>
            )}
            {status === 'error' && (
              <p className="text-red-400 text-sm text-center mt-2">Failed to send message. Please check your config or email me directly.</p>
            )}
          </form>
        </div>

      </div>
    </div>
  )
}

export default Contact;