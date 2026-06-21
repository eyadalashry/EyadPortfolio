import Nav from "../components/Nav";
import Hero from "../components/Hero";
import PortfolioGrid from "../components/PortfolioGrid";
import Process from "../components/Process";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import TimecodeHUD from "../components/TimecodeHUD";

export default function HomePage() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <PortfolioGrid />
        <Process />
        <FAQ />
      </main>
      <Footer />
      <TimecodeHUD />
    </>
  );
}
