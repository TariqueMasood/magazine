"use client";

import { useRouter } from "next/navigation";
import { Container } from "react-bootstrap";
import styles from "./magazines.module.css";
import MagazineList from "@/components/magazine-list/magazine-list";
import SectionTitle from "@/components/section-title/section-title";
import { Suspense } from "react";
import dynamic from "next/dynamic";

const MgLoader = dynamic(() => import("@/components/loader/loader"), {
  ssr: false,
});

const Magazines = () => {
  const router = useRouter();
  return (
    <div className={styles.wrapper}>
      <Container>
        <div className={styles.header}>
          <SectionTitle title="Magazines" />
        </div>
        <Suspense fallback={<MgLoader />}>
          <MagazineList />
          <button onClick={() => router.push("/pdf")}>magazine</button>
        </Suspense>
      </Container>
    </div>
  );
};

export default Magazines;
