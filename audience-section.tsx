'use client';

import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function AudienceSection() {
  return (
    <section className="py-10 lg:py-16 bg-[#f3f2ef]">
      <div className="container">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-1/2 bg-white rounded-lg p-8">
            <h2 className="text-2xl md:text-3xl font-light text-[#B24020] mb-6">
              Who is LinkedIn for?
            </h2>
            <p className="text-gray-600 mb-6">
              Anyone looking to navigate their professional life.
            </p>

            <div className="space-y-4 mb-8">
              <ActionLink text="Find a coworker or classmate" />
              <ActionLink text="Find a new job" />
              <ActionLink text="Find a course or training" />
            </div>
          </div>

          <div className="w-full md:w-1/2">
            <img
              src="https://ext.same-assets.com/3297595289/2197248072.png"
              alt="Students collaborating"
              className="w-full h-auto rounded-lg"
            />
          </div>
        </div>

        <div className="mt-12 bg-[#EEF3F8] rounded-lg p-8 text-center">
          <h2 className="text-2xl md:text-3xl font-light text-[#2c2c2c] mb-6">
            Join your colleagues, classmates, and friends on LinkedIn.
          </h2>
          <Link href="/signup">
            <Button className="bg-[#0a66c2] text-white hover:bg-[#084b8e] rounded-full px-8 py-6">
              Get started
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

interface ActionLinkProps {
  text: string;
}

function ActionLink({ text }: ActionLinkProps) {
  return (
    <Link
      href="#"
      className="flex items-center justify-between border-b border-gray-300 py-3 text-gray-700 hover:text-[#0a66c2] group"
    >
      <span>{text}</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-gray-400 group-hover:text-[#0a66c2] transition-colors"
      >
        <path d="m9 18 6-6-6-6"/>
      </svg>
    </Link>
  );
}
