import { TabProvider, Tab, PostForm } from "@/app/(afterLogin)/home/_component";
import styles from "./home.module.css";
import { Post } from "../_component";

export default function Home() {
  return (
    <main className={styles.main}>
      <TabProvider>
        <Tab />
        <PostForm />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </TabProvider>
    </main>
  );
}
