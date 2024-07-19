import { SliceZone } from "@prismicio/react";
import { createClient } from "../prismicio";
import { components } from "../slices";

export default async function MenuNav() {
  const client = createClient();
  const page = await client.getSingle("navbar");
  
  return (
    <main>
      <SliceZone slices={page.data.slices} components={components} />
    </main>
  );
}