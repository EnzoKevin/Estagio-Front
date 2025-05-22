import Image from "next/image";
import styles from "./page.module.css";
import Layout from "@/pages/components/layout";
import Articles from "@/pages/modules/screens/Articles";

export default function Home() {
  return (
    <Layout>
      <Articles />
    </Layout>
  );
}
