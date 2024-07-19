import Image from "next/image";
import styles from "./page.module.css";
import { SliceZone } from "@prismicio/react";
import { createClient } from "../prismicio";
import { components } from "../slices";
import Home from "./home/page";


export default async function Page() {
  
  return (
    <main className={styles.main}>
      <Home />
    </main>
  );
}