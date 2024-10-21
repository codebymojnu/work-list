import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import TaskBoard from "./components/TaskBoard/TaskBoard";

export default function App() {
  return (
    <>
      <Navbar />
      <HeroSection />

      <TaskBoard />
      <Footer />
    </>
  );
}
