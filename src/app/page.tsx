import Image from "next/image";
import styles from "./page.module.css";
import { SliceZone } from "@prismicio/react";
import { createClient } from "../prismicio";
import { components } from "../slices";
import Home from "@/pages/Home";
import SandiCheck from "@/pages/SandiCheck";

export default async function Page() {
  

  return (
    <main className={styles.main}>
      {/* <Home /> */}
      <SandiCheck />
    </main>
  );
}