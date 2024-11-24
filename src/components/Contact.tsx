import React, { useRef, FormEvent } from 'react';
import toast, { Toaster } from 'react-hot-toast';

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    if (!form.current) return;

    try {
      const formData = new FormData(form.current);
      const data = {
        from_name: formData.get('name'),
        from_email: formData.get('email'),
        message: formData.get('message'),
        to_email: 'l.mesguen@gmail.com'
      };

      const mailtoLink = `mailto:l.mesguen@gmail.com?subject=Portfolio Contact from ${data.from_name}&body=From: ${data.from_name}%0D%0AEmail: ${data.from_email}%0D%0A%0D%0A${data.message}`;
      window.location.href = mailtoLink;
      
      form.current.reset();
      toast.success('Email client opened!');
    } catch (error) {
      toast.error('Something went wrong. Please try again.');
    }
  };

  return (
    <section id="contact" className="py-20 bg-gray-900">
      <Toaster position="top-right" />
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-4 text-center">Get in Touch</h2>
        <p className="text-gray-400 text-center mb-12">Available for freelance projects and consulting</p>
        <div className="max-w-2xl mx-auto">
          <form ref={form} onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
              <input
                type="text"
                name="name"
                id="name"
                required
                className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                required
                className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-3 px-6 rounded-lg bg-indigo-600 hover:bg-indigo-700 transition-colors font-semibold"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;