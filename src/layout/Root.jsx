import About from "../components/About";
import BookingForm from "../components/BookingForm";
import FoodItems from "../components/FoodItems";
import Footer from "../components/Footer";
import HeroBanner from "../components/HeroBanner";
import Navbar from "../components/Navbar";
import Testimonials from "../components/Testimonials";

const Root = () => {
  return (
    <div className="w-full overflow-x-hidden">
      <main>
        <Navbar />
        <HeroBanner />
        <About />
        <FoodItems />
        <BookingForm />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default Root;
