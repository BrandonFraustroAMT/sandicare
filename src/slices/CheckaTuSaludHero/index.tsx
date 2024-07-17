import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `CheckaTuSaludHero`.
 */
export type CheckaTuSaludHeroProps =
  SliceComponentProps<Content.CheckaTuSaludHeroSlice>;

/**
 * Component for "CheckaTuSaludHero" Slices.
 */
const CheckaTuSaludHero = ({ slice }: CheckaTuSaludHeroProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for checka_tu_salud_hero (variation:{" "}
      {slice.variation}) Slices
    </section>
  );
};

export default CheckaTuSaludHero;
