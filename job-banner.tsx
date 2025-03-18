'use client';

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function JobBanner() {
  return (
    <section className="py-10 bg-[#f3f2ef]">
      <div className="container">
        <div className="bg-white rounded-xl p-6 sm:p-8 text-center">
          <h2 className="text-xl sm:text-2xl font-light text-[#2c2c2c] mb-6">
            Post your job for millions of people to see
          </h2>
          <Link href="/post-job">
            <Button className="bg-[#0a66c2] text-white hover:bg-[#084b8e] rounded-full px-6">
              Post a job
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
