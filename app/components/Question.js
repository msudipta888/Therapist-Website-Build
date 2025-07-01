import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Question = () => {
  const faq = [
    { value: "ques-1", question: "Do you accept insurance?", answer: "No, but a superbill is provided for self-submission." },
    { value: "ques-2", question: "Are online sessions available?", answer: "Yes—all virtual sessions via Zoom." },
    { value: "ques-3", question: "What is your cancellation policy?", answer: "24-hour notice required." },
  ];

  return (
    <section className="flex flex-col items-center px-4 " id="faq">
      <h1 className="text-3xl sm:text-4xl font-bold text-center mb-8 mt-1">Frequently Asked Questions</h1>

      <div className="w-full mt-6 max-w-3xl">
        <Accordion type="single" collapsible className="space-y-6">
          {faq.map((item) => (
            <AccordionItem
              key={item.value}
              value={item.value}
              className=" border-b-2 border-black  overflow-hidden"
            >
              <AccordionTrigger className="px-5 py-4 text-lg font-semibold text-blue-900  focus:outline-none">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="px-5 py-4 text-[16px] font-serif text-blue-800">
                <p>{item.answer}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default Question;
