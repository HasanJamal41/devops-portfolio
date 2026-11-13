import Nav from "./components/Nav";
import Hero from "./components/Hero";
import { Marquee, StackMatrix } from "./components/Stack";
import About from "./components/About";
import Lifecycle from "./components/Lifecycle";
import Capabilities from "./components/Capabilities";
import Experience from "./components/Experience";
import Work from "./components/Work";
import Principles from "./components/Principles";
import Contact from "./components/Contact";
import Effects from "./components/Effects";

export default function Home(): React.JSX.Element {
  return (
    <>
      <a className="skip" href="#about">
        Skip to content
      </a>
      <Nav />
      <main id="top">
        <Hero />
        <Marquee />
        <About />
        <Lifecycle />
        <Capabilities />
        <StackMatrix />
        <Experience />
        <Work />
        <Principles />
        <Contact />
      </main>
      <Effects />
    </>
  );
}
