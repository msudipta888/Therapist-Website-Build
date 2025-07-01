import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Fees from './components/Fees';
import Question from './components/Question';
import ContactForm from './components/Contact';
 
const Home = () => {
  return (
    <main className="flex flex-col gap-y-14 items-center overflow-x-hidden">
      <section className="w-[90vw]">
        <Hero />
      </section>

      <section className="w-full bg-gray-50 py-9 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <About />
        </div>
      </section>

      <section className="w-full py-12 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Services />
        </div>
      </section>

      <section className="w-full bg-blue-200  py-12 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto w-full">
          <Fees />
        </div>
      </section>

      <section className="w-full   py-12 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto w-full">
          <Question />
        </div>
      </section>
      <section className="w-full bg-blue-200  py-12 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto w-full">
          <ContactForm />
        </div>
      </section>
    </main>
  );
};

export default Home;
