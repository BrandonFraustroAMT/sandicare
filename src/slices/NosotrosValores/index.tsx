import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `NosotrosValores`.
 */
export type NosotrosValoresProps =
  SliceComponentProps<Content.NosotrosValoresSlice>;

/**
 * Component for "NosotrosValores" Slices.
 */
const NosotrosValores = ({ slice }: NosotrosValoresProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for nosotros_valores (variation: {slice.variation})
      Slices
    </section>
  );
};

export default NosotrosValores;
