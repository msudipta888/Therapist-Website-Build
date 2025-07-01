"use client"
import { Button } from '@/components/ui/button'
import React, { useState } from 'react'
import { PhoneCall, Mail, CheckCircle2 } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '', phone: '', email: '', reason: '', time: '', agree: false,
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Name is required';
    if(formData.phone.length!==10) errs.phone = 'Phone number must be 10 numbers'
    if (!formData.email.match(/^\S+@\S+\.\S+$/)) errs.email = 'Valid email is required';
    if (!formData.reason.trim()) errs.reason = 'Please tell us why you are coming';
    if (!formData.agree) errs.agree = 'You must agree to be contacted';
    return errs;
  };

  const handleChange = (e) => {
    const { name,value,type,checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
    setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    setSubmitted(true);
    setFormData({ name: '', phone: '', email: '', reason: '', time: '', agree: false });
  };

  return (
    <section className="w-full  py-12 px-4 sm:px-6 lg:px-8" id='contact'>
      <div className="max-w-7xl  mx-auto flex flex-col-reverse md:grid md:grid-cols-2 gap-10" >
        <div className="space-y-8 py-16 ">
          <div>
            <h2 className="text-2xl lg:text-3xl text-blue-600 font-bold mb-2">Our Office</h2>
            <p className="text-gray-700 text-xl">1287 Maplewood Drive, Los Angeles, CA 90026</p>
          </div>
          <div>
            <h2 className="text-2xl lg:text-3xl text-blue-600 font-bold mb-2">Office Hours</h2>
            <p className="text-gray-700 text-xl">In-person: Tue &amp; Thu, 10 AM - 6 PM</p>
            <p className="text-gray-700 text-xl">Virtual via Zoom: Mon, Wed &amp; Fri, 1 PM - 5 PM</p>
          </div>
          <div>
            <h2 className="text-2xl lg:text-3xl text-blue-600 font-bold mb-2">Contact</h2>
            <div className="flex items-center text-gray-800">
              <PhoneCall className="mr-2" />
              <span className='text-xl'>(323) 555-0192</span>
            </div>
            <div className="flex items-center text-gray-800">
              <Mail className="mr-2" />
              <span className='text-xl'>serena@blakepsychology.com</span>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="bg-gray-50 p-6 rounded-lg shadow-lg space-y-6 border border-black" >
          <div>
            <h2 className="text-2xl font-bold mb-2">Get In Touch</h2>
            <p className="text-gray-600">Fill out the fields below and we will get back to you soon.</p>
          </div>

          {submitted && (
            <div className="flex items-center  bg-green-100 border border-green-400 text-green-800 px-4 py-3 rounded relative" role="alert">
              <CheckCircle2 className="mr-2" />
              <span>Your message was submitted successfully!</span>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex flex-col">
              <label htmlFor="name" className="mb-1 font-medium text-gray-700">Name</label>
              <input
                id="name" name="name" type="text"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>

            <div className="flex flex-col">
              <label htmlFor="phone" className="mb-1 font-medium text-gray-700">Phone</label>
              <input
                id="phone" name="phone" type='tel'
                value={formData.phone}
               onChange={handleChange}
                placeholder="(91) 345-34234-21"
                className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              {errors.phone && <p className='text-red-500 text-sm mt-1'>{errors.phone}</p>}
            </div>

            <div className="flex flex-col sm:col-span-2">
              <label htmlFor="email" className="mb-1 font-medium text-gray-700">Email</label>
              <input
                id="email" name="email" type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>

            <div className="flex flex-col sm:col-span-2">
              <label htmlFor="reason" className="mb-1 font-medium text-gray-700">Reason for Visit</label>
              <textarea
                id="reason" name="reason" rows="4"
                value={formData.reason}
                onChange={handleChange}
                placeholder="What brings you here?"
                className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              {errors.reason && <p className="text-red-500 text-sm mt-1">{errors.reason}</p>}
            </div>

            <div className="flex flex-col">
              <label htmlFor="time" className="mb-1 font-medium text-gray-700">Preferred Contact Time</label>
              <input
                id="time" name="time" type="text"
                value={formData.time}
                onChange={handleChange}
                placeholder="e.g. 2 PM - 4 PM"
                className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div className="flex items-center space-x-2 pt-4 sm:col-span-2">
              <input
                id="agree" name="agree" type="checkbox"
                checked={formData.agree}
                onChange={handleChange}
                className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
              />
              <label htmlFor="agree" className="text-gray-700">I agree to be contacted</label>
            </div>
            {errors.agree && <p className="text-red-500 text-sm sm:col-span-2">{errors.agree}</p>}
          </div>

          <Button type="submit" disabled={!formData.agree} className="w-full">
            Submit
          </Button>
        </form>
      </div>

      <p className="mt-12 text-center text-gray-600 text-sm">© 2025 Serena Blake PsyD Psychological Services, PLLC. All rights reserved.</p>
    </section>
  )
}

export default ContactForm;
