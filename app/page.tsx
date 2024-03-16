import Contact from "../components/contact";
import Gallery from "../components/gallery";
import Hero from "../components/hero";
import Newsletter from "../components/newsletter";
import Services from "../components/services";
import Stats from "../components/stats";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Contact />
      <Gallery />
      <Newsletter />
    </>
  );
}