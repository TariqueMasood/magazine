import { fetchData } from "@/utils/api";
import dynamic from "next/dynamic";

const HeroMagazineCard = dynamic(
  () => import("../hero-magazine-card/hero-magazine-card"),
  {
    ssr: false,
  }
);

const HeroMagazine = async () => {
  const magazines = await fetchData("pdfs/?limit=1");

  return (
    <>
      {magazines.results.map((magazine) => (
        <HeroMagazineCard key={magazine.id} data={magazine} />
      ))}
    </>
  );
};

export default HeroMagazine;
