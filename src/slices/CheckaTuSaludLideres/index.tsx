import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `CheckaTuSaludLideres`.
 */
export type CheckaTuSaludLideresProps =
  SliceComponentProps<Content.CheckaTuSaludLideresSlice>;

/**
 * Component for "CheckaTuSaludLideres" Slices.
 */
const CheckaTuSaludLideres = ({
  slice,
}: CheckaTuSaludLideresProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for checka_tu_salud_lideres (variation:{" "}
      {slice.variation}) Slices
    </section>
  );
};

export default CheckaTuSaludLideres;
