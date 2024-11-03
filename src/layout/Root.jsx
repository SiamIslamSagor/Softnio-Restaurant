import App from "../App";
import About from "../components/About";
import BookingForm from "../components/BookingForm";
import FoodItems from "../components/FoodItems";
import Footer from "../components/Footer";
import HeroBanner from "../components/HeroBanner";
import Navbar from "../components/Navbar";
import Testimonials from "../components/Testimonials";

const Root = () => {
  return (
    <div className="flex flex-col item-center justify-center">
      <Navbar />
      <HeroBanner />
      <About />
      <FoodItems />
      <BookingForm />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Root;
