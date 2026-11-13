import Nav from "./components/Nav";
import Hero from "./components/Hero";
import { Marquee, Stats } from "./components/Stack";
import Capabilities from "./components/Capabilities";
import Experience from "./components/Experience";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Effects from "./components/Effects";

export default function Home(): React.JSX.Element {
  return (
    <>
      <Nav />
      <main id="top">
        <Hero />
        <Marquee />
        <Stats />
        <Capabilities />
        <Experience />
        <Work />
        <Contact />
      </main>
      <Effects />
    </>
  );
}
