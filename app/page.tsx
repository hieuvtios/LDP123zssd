import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import SyncBanner from "@/components/SyncBanner";
import HowItWorks from "@/components/HowItWorks";
import SitesTicker from "@/components/SitesTicker";
import DownloadCTA from "@/components/DownloadCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SitesTicker />
        <Features />
        <SyncBanner />
        <HowItWorks />
        <DownloadCTA />
      </main>
      <Footer />
    </>
  );
}
