import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `MembresiaFamiliar`.
 */
export type MembresiaFamiliarProps =
  SliceComponentProps<Content.MembresiaFamiliarSlice>;

/**
 * Component for "MembresiaFamiliar" Slices.
 */
const MembresiaFamiliar = ({ slice }: MembresiaFamiliarProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for membresia_familiar (variation: {slice.variation}
      ) Slices
    </section>
  );
};

export default MembresiaFamiliar;
