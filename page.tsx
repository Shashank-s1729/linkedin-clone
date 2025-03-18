import Header from "@/components/header";
import HeroSection from "@/components/hero-section";
import ExploreSection from "@/components/explore-section";
import JobSection from "@/components/job-section";
import JobBanner from "@/components/job-banner";
import OpenToWorkSection from "@/components/open-to-work-section";
import ConnectSection from "@/components/connect-section";
import SkillsSection from "@/components/skills-section";
import AudienceSection from "@/components/audience-section";
import Footer from "@/components/footer";
import HideButton from "@/components/hide-button";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <ExploreSection />
      <JobSection />
      <JobBanner />
      <OpenToWorkSection />
      <div className="flex flex-col md:flex-row bg-white">
        <div className="w-full md:w-1/2">
          <ConnectSection />
        </div>
        <div className="w-full md:w-1/2">
          <SkillsSection />
        </div>
      </div>
      <AudienceSection />
      <Footer />
      <HideButton />
    </>
  );
}
