import { TabProvider, Tab, PostForm } from "@/app/(afterLogin)/home/_component";
import styles from "./home.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <TabProvider>
        <Tab />
        <PostForm />
      </TabProvider>
    </main>
  );
}
