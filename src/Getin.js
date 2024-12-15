import React, { useState } from 'react';
import emailjs from 'emailjs-com'; // Import Email.js

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false); // To manage loading state
  const [isSuccess, setIsSuccess] = useState(false); // To show success message
  const [isError, setIsError] = useState(false); // To show error message

  // Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true); // Set submitting to true

    // Send email using Email.js
    emailjs
      .send(
        "service_j6xvqnh", // Replace with your Service ID
        "template_4l97hzh", // Replace with your Template ID
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        "wSturm67d2SKaW372" // Replace with your Public Key
      )
      .then(() => {
        setIsSuccess(true); // Show success message
        setFormData({ name: '', email: '', message: '' }); // Clear the form
      })
      .catch(() => {
        setIsError(true); // Show error message
      })
      .finally(() => {
        setIsSubmitting(false); // Reset loading state
      });
  };

  return (
    <section className="w-full bg-linear-gradien py-16">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-white">
            <span className="text-purple-500">07. </span>
            Get in touch
          </h2>
          <div className="w-12 h-0.5 bg-purple-500 mt-2"></div>
        </div>

        {/* Content Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Left Side - Text */}
          <div className="space-y-6">
            <p className="text-gray-400 leading-relaxed text-sm">
              Dedicated and results-oriented professional with a fervent commitment to innovation. I
              excel in fostering collaborations with global clients to architect and deliver full-stack
              applications that drive impactful solutions.
            </p>
            <p className="text-gray-400 leading-relaxed text-sm">
              Proficient in navigating the complete lifecycle of software development, I adeptly
              conquer challenges and embrace evolution to ensure the successful delivery of cutting-edge
              products. With a keen eye for industry trends, I continuously adapt to meet the
              dynamic needs of the technology landscape, leveraging strategic insights to drive
              sustainable growth and excellence.
            </p>
          </div>

          {/* Right Side - Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Input */}
            <div>
              <label htmlFor="name" className="block text-sm text-white mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-[#1a1625] border border-purple-500/20 
                         text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 
                         transition-colors"
              />
            </div>

            {/* Email Input */}
            <div>
              <label htmlFor="email" className="block text-sm text-white mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-[#1a1625] border border-purple-500/20 
                         text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 
                         transition-colors"
              />
            </div>

            {/* Message Input */}
            <div>
              <label htmlFor="message" className="block text-sm text-white mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="w-full px-4 py-3 rounded-lg bg-[#1a1625] border border-purple-500/20 
                         text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 
                         transition-colors resize-none"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="px-8 py-2.5 bg-purple-600 text-white rounded-lg hover:bg-purple-700 
                       transition-colors font-medium flex items-center gap-2"
              disabled={isSubmitting} // Disable button while submitting
            >
              {isSubmitting ? "Sending..." : "Send"}
              <span className="text-lg">›</span>
            </button>
          </form>

          {/* Success or Error Messages */}
          {isSuccess && <p className="text-green-500 mt-4">Your message was sent successfully!</p>}
          {isError && <p className="text-red-500 mt-4">Failed to send your message. Please try again.</p>}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
