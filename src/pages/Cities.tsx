import Navbar from "@/components/Navbar";
import CitiesJobListings from "@/components/CitiesJobListings";
import Footer from "@/components/Footer";

const Cities = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-20">
        <CitiesJobListings />
      </div>
      <Footer />
    </div>
  );
};

export default Cities;
