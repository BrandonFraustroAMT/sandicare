import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `HeroSandicheck`.
 */
export type HeroSandicheckProps =
  SliceComponentProps<Content.HeroSandicheckSlice>;

/**
 * Component for "HeroSandicheck" Slices.
 */
const HeroSandicheck = ({ slice }: HeroSandicheckProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for hero_sandicheck (variation: {slice.variation})
      Slices
    </section>
  );
};

export default HeroSandicheck;
