import Hero from "./components/Hero";
import LinkCard from "./components/LinkCard";
import About from "./components/About";
//import Footer from "./components/Footer";
//import QRSection from "./components/QRSection";
//import SaveContact from "./components/SaveContact";

import {
  profile,
  links,
} from "./data/profile";

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white py-10">

      <div
        className="
        max-w-md
        mx-auto
        px-4

        bg-black/40

        backdrop-blur-xl

        border
        border-yellow-500/20

        rounded-3xl

        p-6"
>
        <Hero {...profile} />

        <About />

        <div className="mt-8 space-y-4">
          {links.map((item) => (
            <LinkCard
              key={item.title}
              {...item}
            />
          ))}
        </div>
        {/* <QRSection /> */}
        {/* <SaveContact /> */}
        {/* <Footer /> */}
      </div>
    </div>
  );
}