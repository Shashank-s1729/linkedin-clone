'use client';

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="bg-white pt-8 pb-16 lg:pb-0">
      <div className="container">
        <div className="flex flex-col lg:flex-row items-start lg:items-center">
          <div className="w-full lg:w-1/2 pr-0 lg:pr-12 mb-8 lg:mb-0">
            <h1 className="text-3xl md:text-5xl font-light text-[#2c2c2c] mb-6">
              Welcome to Shashank's professional community
            </h1>

            <div className="bg-white rounded-lg w-full max-w-md mb-6">
              <form className="space-y-4">
                <div>
                  <Input
                    type="email"
                    placeholder="Email or phone number"
                    className="h-12 border-gray-300 rounded-md"
                  />
                </div>
                <div>
                  <Button
                    className="w-full h-12 bg-[#0a66c2] text-white rounded-full hover:bg-[#084b8e]"
                  >
                    Sign in with email
                  </Button>
                </div>
              </form>

              <div className="text-xs text-gray-600 mt-4">
                By clicking Continue to join or sign in, you agree to LinkedIn's{" "}
                <Link href="#" className="text-[#0a66c2] hover:underline">User Agreement</Link>,{" "}
                <Link href="#" className="text-[#0a66c2] hover:underline">Privacy Policy</Link>, and{" "}
                <Link href="#" className="text-[#0a66c2] hover:underline">Cookie Policy</Link>.
              </div>

              <div className="mt-6">
                <p className="text-sm">
                  New to LinkedIn?{" "}
                  <Link href="/signup" className="text-[#0a66c2] font-medium hover:underline">
                    Join now
                  </Link>
                </p>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <img
              src="https://ext.same-assets.com/859648757/2269356777.jpeg"
              alt="Professional illustration"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
