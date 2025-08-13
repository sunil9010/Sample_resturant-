import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    const video = document.getElementById("hero-video");
    if (video) {
      video.addEventListener("loadeddata", () => {
        setVideoLoaded(true);
      });
    }
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Image (Fallback) */}
      <img
        src="https://b.zmtcdn.com/data/o2_assets/52c985ee025e442b74fb4c91cbe20ced1743099385.png"
        alt="Delicious food background"
        className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-500 ${
          videoLoaded ? "opacity-0" : "opacity-100"
        }`}
        loading="eager"
      />

      {/* Background Video */}
      <video
        id="hero-video"
        src="https://b.zmtcdn.com/data/file_assets/2627bbed9d6c068e50d2aadcca11ddbb1743095810.mp4"
        className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-700 ${
          videoLoaded ? "opacity-100" : "opacity-0"
        }`}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
      />
      <div class="absolute inset-0 bg-black/50 z-[1]"></div>

      {/* Content Box with Dark Background */}
      <div
        className="
          relative z-10 flex flex-col items-center text-center text-white
          h-full  justify-center md:pb-0
        "
      >
        <div
          className="
           md:bg-transparent md:bg-opacity-0 md:backdrop-blur-none bg-opacity-70 md:shadow-none 
            rounded-t-3xl md:rounded-xl
            p-6 w-full md:max-w-xl
          "
        >
          <h1 className="font-extrabold text-5xl md:text-7xl tracking-tight text-white drop-shadow-[0_4px_15px_rgba(0,0,0,0.8)]">
            India’s Tasty Food #1<br /> 
          </h1>
          {/* <p class="text-lg md:text-2xl text-gray-200 mt-6 mb-10 max-w-2xl mx-auto leading-relaxed" style="font-family: Lora, serif;">From the fiery streets of Delhi to the royal kitchens of Hyderabad — every bite tells a story of tradition, spice, and passion.</p> */}
          <p className="text-lg md:text-2xl text-gray-200 mt-6 mb-10 max-w-2xl mx-auto leading-relaxed">
           From the fiery streets of Delhi to the royal kitchens of Hyderabad — every bite tells a story of tradition, spice, and passion.
          </p>
           <Button
            onClick={() => scrollToSection("menu")}
            size="lg"
            className="px-6 text-white py-3 bg-[rgb(226_55_68/1)] hover:bg-red-600 rounded-full font-semibold transition duration-300"
          >
            Explore Our Menu
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
