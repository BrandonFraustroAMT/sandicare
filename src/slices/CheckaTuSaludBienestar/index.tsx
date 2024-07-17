import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `CheckaTuSaludBienestar`.
 */
export type CheckaTuSaludBienestarProps =
  SliceComponentProps<Content.CheckaTuSaludBienestarSlice>;

/**
 * Component for "CheckaTuSaludBienestar" Slices.
 */
const CheckaTuSaludBienestar = ({
  slice,
}: CheckaTuSaludBienestarProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for checka_tu_salud_bienestar (variation:{" "}
      {slice.variation}) Slices
    </section>
  );
};

export default CheckaTuSaludBienestar;
