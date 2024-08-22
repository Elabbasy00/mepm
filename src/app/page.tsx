import ServicesCard from "@/components/cards/ServicesCard";
import Hero from "@/components/hero/Hero";
import HomeAbout from "@/components/home-about/HomeAbout";
import HomeClients from "@/components/home-clients/HomeClients";
import HomeContact from "@/components/home-contact/HomeContact";
import HomeServices from "@/components/home-services/HomeServices";

export default function Home() {
  return (
    <div>
      <Hero />
      <HomeAbout />
      <HomeServices />
      <HomeClients />
      <HomeContact />
    </div>
  );
}
