import { useState } from "react";
import About from "../components/About";
import BookingForm from "../components/BookingForm";
import FoodItems from "../components/FoodItems";
import Footer from "../components/Footer";
import HeroBanner from "../components/HeroBanner";
import Navbar from "../components/Navbar";
import Testimonials from "../components/Testimonials";
import Preloader from "../components/Preloader";
import { AnimatePresence } from "framer-motion";

const Root = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isBannerHidden, setIsBannerHidden] = useState(false);

  return (
    <div className="w-full overflow-x-hidden relative">
      <AnimatePresence mode="wait">
        {isLoading ? (
          <Preloader isLoading={isLoading} setIsLoading={setIsLoading} />
        ) : (
          <>
            <main>
              <Navbar isBannerHidden={isBannerHidden} />
              <HeroBanner setIsBannerHidden={setIsBannerHidden} />
              <About />
              <FoodItems />
              <BookingForm />
              <Testimonials />
            </main>
            <Footer />
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Root;
