
import Footer from "@/src/components/common/Footer";
import Hero from "@/src/components/home/Hero";
import OurAccommodation from "@/src/components/home/OurAccommodation";
import ReviewPlace from "@/src/components/home/ReviewPlace";
import RoomPriceDetails from "@/src/components/home/RoomPriceDetails";
import Services from "@/src/components/home/Services";
import WebUsersRating from "@/src/components/home/WebUsersRating";

export default function Home() {
  return (
    <>
      <Hero />
      <ReviewPlace />
      <OurAccommodation />
      <RoomPriceDetails />
      <Services />
      <WebUsersRating />
      <Footer />
    </>
  );
}