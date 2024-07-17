import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `PorqueSandicheck`.
 */
export type PorqueSandicheckProps =
  SliceComponentProps<Content.PorqueSandicheckSlice>;

/**
 * Component for "PorqueSandicheck" Slices.
 */
const PorqueSandicheck = ({ slice }: PorqueSandicheckProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for porque_sandicheck (variation: {slice.variation})
      Slices
    </section>
  );
};

export default PorqueSandicheck;
