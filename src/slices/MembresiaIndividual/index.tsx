import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `MembresiaIndividual`.
 */
export type MembresiaIndividualProps =
  SliceComponentProps<Content.MembresiaIndividualSlice>;

/**
 * Component for "MembresiaIndividual" Slices.
 */
const MembresiaIndividual = ({
  slice,
}: MembresiaIndividualProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for membresia_individual (variation:{" "}
      {slice.variation}) Slices
    </section>
  );
};

export default MembresiaIndividual;
