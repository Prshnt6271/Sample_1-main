import React, { useState } from "react";
import BackgroundVideo from "../components/BackgroundVideo";
import Header from "../components/Header";
import SearchModal from "../components/SearchModal";
import Footer from "../components/Footer";
import Nakheel from "../components/Nakheel";

const HomePage = () => {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <div className="relative w-full min-h-screen">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <BackgroundVideo />
      </div>

      {/* Header and Search Modal */}
      <Header setSearchOpen={setSearchOpen} />
      <SearchModal searchOpen={searchOpen} setSearchOpen={setSearchOpen} />

      {/* Image Grid Below the Video */}
      <div className="relative z-20 mt-[100vh]">
        <Nakheel />
      </div>

      {/* Footer (if needed) */}
      {/* <Footer /> */}
    </div>
  );
};

export default HomePage;
