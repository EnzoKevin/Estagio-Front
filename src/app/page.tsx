import Image from "next/image";
import styles from "./page.module.css";
import Layout from "@/pages/components/layout";
import Hero from "@/pages/modules/screens/home";

export default function Home() {
  return (
    <Layout>
      <Hero />
    </Layout>
  );
}
