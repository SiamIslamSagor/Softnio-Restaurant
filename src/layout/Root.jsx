import { useState } from "react";
import About from "../components/About";
import BookingForm from "../components/BookingForm";
import FoodItems from "../components/FoodItems";
import Footer from "../components/Footer";
import HeroBanner from "../components/HeroBanner";
import Navbar from "../components/Navbar";
import Testimonials from "../components/Testimonials";

const Root = () => {
  const [isBannerHidden, setIsBannerHidden] = useState(false);
  // console.log(isBannerHidden);
  return (
    <div className="w-full overflow-x-hidden">
      <main>
        <Navbar isBannerHidden={isBannerHidden} />
        <HeroBanner setIsBannerHidden={setIsBannerHidden} />
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
