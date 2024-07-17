import Image from "next/image";
import styles from "./page.module.css";
import { SliceZone } from "@prismicio/react";
import { createClient } from "../prismicio";
import { components } from "../slices";
import Home from "@/pages/Home";

export default async function Page() {
  const client = createClient();
  const page = await client.getSingle("home");
  

  return (
    <main className={styles.main}>
      <Home />
    </main>
  );
}