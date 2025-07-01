import React from 'react';

export default function Fees() {
  return (
    <div className="w-full   flex items-center justify-center">
     
      <div className="rounded-lg  lg:h-[300px] w-full max-w-4xl lg:max-w-none mx-auto  p-6">
        <h2 className="text-center text-2xl font-semibold tracking-wide text-gray-900">
          Rates and Insurance
        </h2>

        <div className="mt-6 flex flex-col justify-center items-center">
          <div className="flex  p-4">
            <span className="font-light text-lg tracking-wide">Individual Session - $200</span>
          </div>
          <div className="flex  p-4">
            <span className="font-light text-lg tracking-wide">Couples Session - $240</span>
          </div>
          <div className="p-4 ml-10  text-gray-800  font-serif tracking-wide">
I accept both private pay and insurance. I am in-network with BCBS and Aetna.
          </div>
          <div className="p-4  text-gray-800 font-serif  tracking-wide">
For out-of-network plans, I’ve partnered with Mentaya using <span className='underline'>this tool</span>  to help you check your eligibility for reimbursement for my services.

          </div>
        </div>
      </div>
    </div>
  );
}
