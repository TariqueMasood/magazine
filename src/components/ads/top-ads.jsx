import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./ads.module.css";
import { fetchData } from "@/utils/api";
import { Container } from "react-bootstrap";

const TopAds = async () => {
  const ads = await fetchData("topads");
  return (
    <Container>
      <div className="text-center">
        {ads.results &&
          ads.results.map((ad) => (
            <Link
              href={ad.link}
              key={ad.id}
              className={styles.linkContainer}
              target="_blank"
            >
              <Image
                src={ad.image}
                alt="ads-img"
                width={728}
                height={90}
                className={styles.imgCss}
              />
            </Link>
          ))}
      </div>
    </Container>
  );
};

export default TopAds;
