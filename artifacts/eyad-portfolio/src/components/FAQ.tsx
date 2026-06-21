"use client";

import { useState } from "react";
import SectionIcon from "./SectionIcon";
import { DocumentIcon } from "./icons";

const faqs = [
  {
    question: "What do we offer to your business?",
    answer:
      "High-impact reel editing for Instagram creators. I cut hook-heavy reels, UGC-style ad edits, talking-head podcast clips, and storytime edits — built to hold attention from the first frame.",
  },
  {
    question: "How long does a project usually take?",
    answer:
      "Most reels turn around in 24-72 hours depending on length and how much footage you send over. Ongoing clients get a standing weekly slot.",
  },
  {
    question: "Is there a limit to revisions?",
    answer:
      "No compromises — unlimited revisions on every reel until the pacing, captions, and cut feel exactly right.",
  },
  {
    question: "What's your editing process like?",
    answer:
      "We study your unique business vision and tailor a premium video format built specifically for your audience. Through high-stakes narrative editing and high-contrast color grading, we ensure maximum performance and retention from every frame of your footage.",
  },
  {
    question: "How do payments work?",
    answer:
      "I send a simple invoice to get started. Once it's paid, editing begins right away and you're updated through the whole process. I accept PayPal, Stripe, bank transfer, and crypto.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="border-b border-[#1F1F1F] py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-6">
        <div className="mb-12">
          <SectionIcon icon={<DocumentIcon />} label="FAQ" />
          <h2 className="font-['Helvetica_Neue',Helvetica,Arial,sans-serif] text-3xl font-extrabold tracking-[-0.04em] md:text-4xl inline-block bg-[#005BFF] px-2 py-0.5 text-white">
            Questions, answered.
          </h2>
        </div>

        <div className="divide-y divide-[#1F1F1F] border-t border-[#1F1F1F]">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={faq.question}>
                <button
                  className="flex w-full items-center justify-between gap-6 py-6 text-left"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                >
                  <span className="font-['Helvetica_Neue',Helvetica,Arial,sans-serif] text-base font-bold tracking-[-0.04em] md:text-lg">
                    {faq.question}
                  </span>
                  <span
                    className={`text-lg text-[#5A5A5A] transition-transform duration-200 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                    aria-hidden="true"
                  >
                    +
                  </span>
                </button>
                <div
                  className={`grid overflow-hidden transition-all duration-300 ease-out ${
                    isOpen
                      ? "grid-rows-[1fr] pb-6 opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <p className="min-h-0 text-sm leading-relaxed text-[#8A8A8A]">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
