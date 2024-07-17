import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `EmpiezaSandicheck`.
 */
export type EmpiezaSandicheckProps =
  SliceComponentProps<Content.EmpiezaSandicheckSlice>;

/**
 * Component for "EmpiezaSandicheck" Slices.
 */
const EmpiezaSandicheck = ({ slice }: EmpiezaSandicheckProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for empieza_sandicheck (variation: {slice.variation}
      ) Slices
    </section>
  );
};

export default EmpiezaSandicheck;
