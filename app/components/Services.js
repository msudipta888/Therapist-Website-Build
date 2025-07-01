import React from 'react';
import Image from 'next/image';

const cardData = [
  {
    title: 'Anxiety & Stress Management',
    imgSrc: '/images/stress.jpeg',
    alt: 'stress',
    description: `Dr. Blake offers personalized anxiety and stress management plans that combine cognitive behavioral techniques, mindfulness exercises, and relaxation strategies. Through a safe and supportive space, she helps you identify triggers, challenge negative thought patterns, and develop healthy coping skills.`
  },
  {
    title: 'Relationship Counseling',
    imgSrc: '/images/relationship.jpeg',
    alt: 'relationship',
    description: `Whether you are navigating communication breakdowns, trust issues, or life transitions, Dr. Blake provides compassionate, solution focused relationship counseling for individuals and couples. Her collaborative style encourages mutual understanding and empathy.`
  },
  {
    title: 'Trauma Recovery',
    imgSrc: '/images/trauma.jpeg',
    alt: 'trauma',
    description: `In trauma recovery sessions, Dr. Blake integrates trauma informed care, EMDR, and somatic awareness techniques to safely process and heal from past wounds. Her goal is to help you restore emotional balance and move forward with renewed strength.`
  }
];

export default function Services() {
  return (
    <section className=" bg-gray-50 dark:bg-gray-900" id='service'>
      <div className="container mx-auto px-4">
        <h2 className="text-center text-3xl md:text-5xl font-sans text-gray-800 dark:text-gray-100 mb-8">
          Areas of Focus
        </h2>
 <br />
        <div className="grid gap-8 grid-cols-1 w-full sm:grid-cols-2 lg:grid-cols-3">
          {cardData.map((card, idx) => (
            <div
              key={idx}
              className="relative space-y-3 p-6 flex flex-col items-center text-center transform hover:-translate-y-1 transition  dark:bg-gray-800/20"
            >
              <div className="w-[250px] h-[250px] relative -mt-8">
                <Image
                  src={card.imgSrc}
                  alt={card.alt}
                  layout="fill"
                 objectFit='cover'
                  className="rounded-full"
                />
              </div>
              <h3 className="font-serif text-xl md:text-2xl text-gray-900 dark:text-gray-100 mb-2">
                {card.title}
              </h3>
              <p className="text-base font-extralight sm:text-[10px] md:text-base text-gray-700 dark:text-gray-200">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
