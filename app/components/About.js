import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div className="h-full -mt-9" id="about">
    <div className="flex flex-col lg:flex-row-reverse items-center justify-center mt-12 gap-10 p-6 h-auto lg:h-[90vh]  text-gray-800">
      <div className="relative w-full lg:w-2/5 h-[550px] lg:h-full flex items-center justify-center">
        <Image
          src="/images/doctor_selena.jpeg"
          alt="Dr. Serena Blake"
          width={500}
          height={500}
          quality={80}
          className="rounded-2xl shadow-xl border-8 border-white  object-cover w-full lg:w-[460px] h-auto  lg:h-[550px]"
        />
      </div>

      <div className="w-full lg:w-2/5 flex flex-col items-center gap-4 text-center px-4">
  <h1 className="text-black font-thin font-sans -mt-12 text-4xl">
    About Dr. Serena Blake
  </h1> <br />
  <p className="text-sm text-gray-500 sm:text-base leading-relaxed max-w-md">
    Dr. Serena Blake is a licensed clinical psychologist (PsyD) based in Los Angeles, CA, with 8 years of experience and over 500 client sessions.
    <br /><br />
    She blends evidence-based approaches—like cognitive-behavioral therapy and mindfulness—with compassionate, personalized care to help you overcome anxiety, strengthen relationships, and heal from trauma.
    <br /><br />
    Whether you meet in her Maplewood Drive office or connect virtually via Zoom, Dr. Blake is committed to creating a safe, supportive space for you to thrive.
  </p>
</div>
    </div> 
    <div className="sm:mt-[180px]">
    <div className="md:w-[90%] mt-20 lg:ml-[50px] ml-5 border-t-2 border-black/60"></div><br />
   <div className="bg-slate-100 mt-16 flex flex-col items-center justify-center p-6 w-full mx-auto space-y-4 h-[550px]">
  <h1 className="text-xl md:text-4xl font-thin font-sans text-center">
    Therapy can be a space where you invest in yourself—
    <br />
    one of the highest forms of self-care.
  </h1>

  <div className="w-full" />
  <p className="text-base md:text-xl text-center font-light">
    You may be led to therapy by anxiety, depression, relationship stress,
    past or recent trauma, grief and loss, self-esteem issues,<br />
    or challenges with family, parenting, or parental relationships.
    Whatever the source of your stress, you do not have to face it alone.
  </p>
  <p className="text-base text-center md:text-xl font-light">
    Therapy offers you the time and space to work toward wellness and peace.
  </p>
</div><br />
    <div className="md:w-[90%] mt-20 lg:ml-[50px] ml-5 border-t-2 border-black/60"></div>
</div>
   </div>
  );
};

export default About;
