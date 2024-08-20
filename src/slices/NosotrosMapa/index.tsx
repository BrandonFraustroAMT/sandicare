import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `NosotrosMapa`.
 */
export type NosotrosMapaProps = SliceComponentProps<Content.NosotrosMapaSlice>;

/**
 * Component for "NosotrosMapa" Slices.
 */
const NosotrosMapa = ({ slice }: NosotrosMapaProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for nosotros_mapa (variation: {slice.variation})
      Slices
    </section>
  );
};

export default NosotrosMapa;
