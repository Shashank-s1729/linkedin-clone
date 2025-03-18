'use client';

import Link from 'next/link';

export default function ExploreSection() {
  return (
    <section className="py-10 lg:py-16">
      <div className="container">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-1/3">
            <h2 className="text-2xl md:text-3xl font-light text-[#2c2c2c] mb-4">
              Explore collaborative articles
            </h2>
            <p className="text-gray-600 mb-4">
              We're unlocking community knowledge in a new way. Experts add insights directly into each article, started with the help of AI.
            </p>
          </div>

          <div className="w-full md:w-2/3">
            <div className="flex flex-wrap gap-2">
              <CategoryTag label="Marketing" href="/topics/marketing" />
              <CategoryTag label="Public Administration" href="/topics/public-administration" />
              <CategoryTag label="Healthcare" href="/topics/healthcare" />
              <CategoryTag label="Engineering" href="/topics/engineering" />
              <CategoryTag label="IT Services" href="/topics/it-services" />
              <CategoryTag label="Sustainability" href="/topics/sustainability" />
              <CategoryTag label="Business Administration" href="/topics/business-administration" />
              <CategoryTag label="Telecommunications" href="/topics/telecommunications" />
              <CategoryTag label="HR Management" href="/topics/hr-management" />

              <div className="mt-4 w-full">
                <Link href="/topics" className="text-[#0a66c2] font-medium text-sm hover:underline inline-flex items-center">
                  Show all
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
                    <path d="m9 18 6-6-6-6"/>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

interface CategoryTagProps {
  label: string;
  href: string;
}

function CategoryTag({ label, href }: CategoryTagProps) {
  return (
    <Link href={href} className="bg-white rounded-full px-4 py-2 text-sm border border-gray-300 hover:border-gray-600 cursor-pointer transition-colors inline-block">
      {label}
    </Link>
  );
}
