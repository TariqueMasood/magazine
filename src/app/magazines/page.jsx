// "use client";
import { Container } from "react-bootstrap";
import styles from "./magazines.module.css";
import MagazineList from "@/components/magazine-list/magazine-list";
import SectionTitle from "@/components/section-title/section-title";
import { Suspense } from "react";
import dynamic from "next/dynamic";
import HeroMagazine from "@/components/hero-magazine/hero-magazine";
import HeroSidebar from "@/components/hero-sidebar/hero-sidebar";

const MgLoader = dynamic(() => import("@/components/loader/loader"), {
  ssr: false,
});

const Magazines = () => {
  return (
    <div className={styles.wrapper}>
      <Container>
        <div className={styles.hero}>
          <HeroMagazine />
          <HeroSidebar />
          <div className={styles.ad}></div>
        </div>
        <div className={styles.header}>
          <SectionTitle title="Latest edition" />
          <div>
            Read the latest posts from experts at Knowmed Health Publishing
            covering a variety of health topics and perspectives on medical
            news.
          </div>
        </div>
        <Suspense fallback={<MgLoader />}>
          <MagazineList />
        </Suspense>
      </Container>
    </div>
  );
};

export default Magazines;
