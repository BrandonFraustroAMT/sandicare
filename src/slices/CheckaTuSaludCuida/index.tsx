import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `CheckaTuSaludCuida`.
 */
export type CheckaTuSaludCuidaProps =
  SliceComponentProps<Content.CheckaTuSaludCuidaSlice>;

/**
 * Component for "CheckaTuSaludCuida" Slices.
 */
const CheckaTuSaludCuida = ({
  slice,
}: CheckaTuSaludCuidaProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for checka_tu_salud_cuida (variation:{" "}
      {slice.variation}) Slices
    </section>
  );
};

export default CheckaTuSaludCuida;
