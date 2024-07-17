import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `ProcesoSandicheck`.
 */
export type ProcesoSandicheckProps =
  SliceComponentProps<Content.ProcesoSandicheckSlice>;

/**
 * Component for "ProcesoSandicheck" Slices.
 */
const ProcesoSandicheck = ({ slice }: ProcesoSandicheckProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for proceso_sandicheck (variation: {slice.variation}
      ) Slices
    </section>
  );
};

export default ProcesoSandicheck;
