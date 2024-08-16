import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `MembresiaPlus`.
 */
export type MembresiaPlusProps =
  SliceComponentProps<Content.MembresiaPlusSlice>;

/**
 * Component for "MembresiaPlus" Slices.
 */
const MembresiaPlus = ({ slice }: MembresiaPlusProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for membresia_plus (variation: {slice.variation})
      Slices
    </section>
  );
};

export default MembresiaPlus;
