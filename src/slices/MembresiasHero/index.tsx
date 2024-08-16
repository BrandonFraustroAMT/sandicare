import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `MembresiasHero`.
 */
export type MembresiasHeroProps =
  SliceComponentProps<Content.MembresiasHeroSlice>;

/**
 * Component for "MembresiasHero" Slices.
 */
const MembresiasHero = ({ slice }: MembresiasHeroProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for membresias_hero (variation: {slice.variation})
      Slices
    </section>
  );
};

export default MembresiasHero;
