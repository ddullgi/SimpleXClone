import Link from "next/link";
import styles from "./layout.module.css";
import Image from "next/image";
import logo from "../../../public/logo.png";
import {
  FollowRecommend,
  LogoutButton,
  NavMenu,
  RightSearchZone,
  TrendSection,
} from "@/app/(afterLogin)/_component";

type Props = {
  children: React.ReactNode;
  modal: React.ReactNode;
};

export default async function AfterLoginLayout({ children, modal }: Props) {
  return (
    <div className={styles.container}>
      <header className={styles.leftSectionWrapper}>
        <section className={styles.leftSection}>
          <div className={styles.leftSectionFixed}>
            <Link className={styles.logo} href="/home">
              <div className={styles.lopgPill}>
                <Image src={logo} alt="홈페이지 로고" width={50} height={50} />
              </div>
            </Link>
            <nav>
              <ul>
                <NavMenu />
              </ul>
              <Link href="/compose/tweet" className={styles.postButton}>
                게시하기
              </Link>
            </nav>
            <LogoutButton />
          </div>
        </section>
      </header>
      <div className={styles.rightSectionWrapper}>
        <div className={styles.rightSectionInner}>
          <main className={styles.main}>{children}</main>
          <section className={styles.rightSection}>
            <RightSearchZone />
            <TrendSection />
            <div className={styles.followRecommend}>
              <h3>팔로우 추천</h3>
              <FollowRecommend />
              <FollowRecommend />
              <FollowRecommend />
            </div>
          </section>
        </div>
      </div>
      {modal}
    </div>
  );
}
