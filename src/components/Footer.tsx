import { SliceZone } from "@prismicio/react";
import { createClient } from "../prismicio";
import { components } from "../slices";

export default async function Footer() {
  const client = createClient();
  const page = await client.getSingle("footer");
  
  return (
    <main>
      <SliceZone slices={page.data.slices} components={components} />
    </main>
  );
}