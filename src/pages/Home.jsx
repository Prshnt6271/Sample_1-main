
import React, { useState } from "react";
import BackgroundVideo from "../components/BackgroundVideo";
import Header from "../components/Header";
import SearchModal from "../components/SearchModal";
import Footer from "../components/Footer";


const HomePage = () => {
  
  const [searchOpen, setSearchOpen] = useState(false);
  
  return (
    <div className="relative w-full h-screen overflow-hidden" >
       <BackgroundVideo />
       <Header setSearchOpen={setSearchOpen} />

      <SearchModal searchOpen={searchOpen} setSearchOpen={setSearchOpen} />

      <Footer />
    
    </div>
  );
};

export default HomePage;
