import HomeHeader from "@/components/home/home-header";
import Testimonials from "@/components/home/testimonials";
import EventCarousel from "@/components/home/event-carousel";

export default function Home() {
  return (
    <main className="flex flex-col items-start justify-between">
      <HomeHeader />
      <Testimonials />
      <EventCarousel />
    </main>
  );
}
