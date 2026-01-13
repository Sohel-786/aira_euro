import { Hero } from "./_components/Hero";
import { CompanyIntro } from "./_components/CompanyIntro";
import { Statistics } from "./_components/Statistics";
import { ProductRange } from "./_components/ProductRange";
import { QualityAssurance } from "./_components/QualityAssurance";
import { Industries } from "./_components/Industries";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="relative overflow-hidden">
      {/* Background decorative elements */}
      <Image
        src="/assets/images/landing_page/HomePageDesign.svg"
        alt="Background Image"
        className="absolute top-[1087px] z-[1] opacity-10"
        width={403}
        height={1369}
      />

      <Image
        src="/assets/images/landing_page/HomePageDesign.svg"
        alt="Background Image"
        className="absolute top-[2418px] right-[-30px] scale-x-[-1] z-[1] opacity-10"
        width={403}
        height={1369}
      />

      <Hero />
      <CompanyIntro />
      <Statistics />
      <ProductRange />
      <QualityAssurance />
      <Industries />
    </div>
  );
}
