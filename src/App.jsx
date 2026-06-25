import Hero from "./components/Hero";
import LinkCard from "./components/LinkCard";
import About from "./components/About";
import GameQR from "./components/GameQR";
//import Footer from "./components/Footer";
//import QRSection from "./components/QRSection";
//import SaveContact from "./components/SaveContact";

import {
  profile,
  links,
} from "./data/profile";

export default function App() {
  return (
    <div
      className="h-screen bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: "url('/background.jpg')",
      }}
    >
      <div className="h-screen bg-black/60 text-white py-2 overflow-y-auto hide-scrollbar">

        <div className="max-w-md mx-auto px-4 flex flex-col justify-center min-h-full">

          <Hero {...profile} />

          <About />

          <div className="mt-3 space-y-2">
            {links.map((item) => (
              <LinkCard
                key={item.title}
                {...item}
              />
            ))}
          </div>

          <GameQR />

        </div>

      </div>
    </div>
  );
}