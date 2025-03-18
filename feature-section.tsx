'use client';

import { Button } from "@/components/ui/button";
import Link from "next/link";

interface FeatureSectionProps {
  title: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
  imageSrc?: string;
  imageAlt?: string;
  imagePosition?: "left" | "right";
  backgroundColor?: string;
}

export default function FeatureSection({
  title,
  description,
  buttonText,
  buttonLink = "#",
  imageSrc,
  imageAlt = "",
  imagePosition = "right",
  backgroundColor = "bg-white",
}: FeatureSectionProps) {
  return (
    <section className={`py-10 lg:py-16 ${backgroundColor}`}>
      <div className="container">
        <div className={`flex flex-col ${imagePosition === "right" ? "md:flex-row" : "md:flex-row-reverse"} items-center gap-8`}>
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl md:text-3xl font-light text-[#2c2c2c] mb-4">
              {title}
            </h2>

            {description && (
              <p className="text-gray-600 mb-6">
                {description}
              </p>
            )}

            {buttonText && (
              <Link href={buttonLink}>
                <Button className="rounded-full px-6 border-[1px] border-gray-500 font-medium text-gray-800 hover:bg-gray-100 hover:border-gray-700 bg-transparent">
                  {buttonText}
                </Button>
              </Link>
            )}
          </div>

          {imageSrc && (
            <div className="w-full md:w-1/2">
              <img
                src={imageSrc}
                alt={imageAlt}
                className="w-full h-auto rounded-lg"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
