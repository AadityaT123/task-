import Projects from "../components/projects";
import Clients from "../components/Clients";
import ContactForm from "../components/ContactForm";
import Newsletter from "../components/Newsletter";
import LandingHero from "../components/LandingHero";

export default function Home() {
  return (
    <>
      <LandingHero />
      <Projects />
      <Clients />
      <ContactForm />
      <Newsletter />
    </>
  );
}
