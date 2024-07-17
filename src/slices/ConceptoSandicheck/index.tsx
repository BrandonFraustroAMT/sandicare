import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `ConceptoSandicheck`.
 */
export type ConceptoSandicheckProps =
  SliceComponentProps<Content.ConceptoSandicheckSlice>;

/**
 * Component for "ConceptoSandicheck" Slices.
 */
const ConceptoSandicheck = ({
  slice,
}: ConceptoSandicheckProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for concepto_sandicheck (variation:{" "}
      {slice.variation}) Slices
    </section>
  );
};

export default ConceptoSandicheck;
