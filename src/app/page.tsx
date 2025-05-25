import Categories from "@/components/Home/Categories";
import FeaturedProducts from "@/components/Home/FeaturedProducts";
import { NewHero } from "@/components/Home/NewHero";
import { Testimonials } from "@/components/Home/Testimonials";

export default function Home() {
  return (
    <>
      <NewHero />
      <Categories />
      <FeaturedProducts />
      <Testimonials />
    </>
  );
}
