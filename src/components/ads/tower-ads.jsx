import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./ads.module.css";
import { fetchData } from "@/utils/api";

const TowerAds = async () => {
  const ads = await fetchData("towerads");
  return (
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
              width={300}
              height={600}
              className={styles.imgCss}
            />
          </Link>
        ))}
    </div>
  );
};

export default TowerAds;
