'use client';

import Link from 'next/link';
import React from 'react';

const jobCategories = [
  "Engineering",
  "Business Development",
  "Finance",
  "Administrative Assistant",
  "Retail Associate",
  "Customer Service",
  "Operations",
  "Information Technology",
  "Marketing",
  "Human Resources"
];

export default function JobSection() {
  const [showMore, setShowMore] = React.useState(false);

  return (
    <section className="py-10 lg:py-16 bg-white">
      <div className="container">
        <h2 className="text-2xl md:text-3xl font-light text-[#2c2c2c] mb-6">
          Find the right job or internship for you
        </h2>

        <div className="flex flex-wrap gap-2">
          {jobCategories.map((category) => (
            <JobCategoryTag
              key={category}
              label={category}
              href={`/jobs/${category.toLowerCase().replace(/\s+/g, '-')}`}
            />
          ))}

          {showMore && (
            <>
              <JobCategoryTag label="Sales" href="/jobs/sales" />
              <JobCategoryTag label="Program and Project Management" href="/jobs/program-project-management" />
              <JobCategoryTag label="Accounting" href="/jobs/accounting" />
              <JobCategoryTag label="Arts and Design" href="/jobs/arts-design" />
              <JobCategoryTag label="Community and Social Services" href="/jobs/community-social-services" />
              <JobCategoryTag label="Consulting" href="/jobs/consulting" />
              <JobCategoryTag label="Education" href="/jobs/education" />
              <JobCategoryTag label="Entrepreneurship" href="/jobs/entrepreneurship" />
              <JobCategoryTag label="Legal" href="/jobs/legal" />
              <JobCategoryTag label="Media and Communications" href="/jobs/media-communications" />
            </>
          )}

          <div className="mt-4 w-full">
            <button
              onClick={() => setShowMore(!showMore)}
              className="flex items-center text-gray-600 hover:text-black"
            >
              {showMore ? 'Show less' : 'Show more'}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className={`ml-1 transition-transform ${showMore ? 'rotate-180' : ''}`}
              >
                <path d="m6 9 6 6 6-6"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

interface JobCategoryTagProps {
  label: string;
  href: string;
}

function JobCategoryTag({ label, href }: JobCategoryTagProps) {
  return (
    <Link href={href} className="bg-white rounded-full px-4 py-2 text-sm border border-gray-300 hover:border-gray-600 cursor-pointer transition-colors inline-block">
      {label}
    </Link>
  );
}
