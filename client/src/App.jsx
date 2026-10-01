import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import CategoryGrid from "./components/CategoryGrid";
import NewArrivals from "./components/NewArrivals";
import PromoBanner from "./components/PromoBanner";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <CategoryGrid />
        <NewArrivals />
        <PromoBanner />
        <Features compact />
      </main>
      <Footer />
    </>
  );
}
