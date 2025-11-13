import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhyStone from "@/components/WhyStone";
import JobListings from "@/components/JobListings";
import Benefits from "@/components/Benefits";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <WhyStone />
      <JobListings />
      <Benefits />
      <Footer />
    </div>
  );
};

export default Index;
