"use client";

import Trend from "@/app/(afterLogin)/_component/Trend";
import styles from "./trendSection.module.css";
import { usePathname } from "next/navigation";

export default function TrendSection() {
  const pathname = usePathname();
  if (pathname === "/explore") return null;

  return (
    <div className={styles.trendBg}>
      <div className={styles.trend}>
        <h3>나를 위한 트렌드</h3>
        <Trend />
        <Trend />
        <Trend />
        <Trend />
        <Trend />
        <Trend />
        <Trend />
        <Trend />
        <Trend />
        <Trend />
      </div>
    </div>
  );
}
