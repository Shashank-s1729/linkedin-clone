'use client';

import FeatureSection from '@/components/feature-section';

export default function ConnectSection() {
  return (
    <FeatureSection
      title="Connect with people who can help"
      buttonText="Find people you know"
      buttonLink="/connections"
      imageSrc="https://static.licdn.com/aero-v1/sc/h/4ezbw852t2wrgf27zl1o1qtu7"
      imageAlt="People networking illustration"
      imagePosition="left"
      backgroundColor="bg-white"
    />
  );
}
