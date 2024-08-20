import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `NosotrosHero`.
 */
export type NosotrosHeroProps = SliceComponentProps<Content.NosotrosHeroSlice>;

/**
 * Component for "NosotrosHero" Slices.
 */
const NosotrosHero = ({ slice }: NosotrosHeroProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for nosotros_hero (variation: {slice.variation})
      Slices
    </section>
  );
};

export default NosotrosHero;
