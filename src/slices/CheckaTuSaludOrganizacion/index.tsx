import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `CheckaTuSaludOrganizacion`.
 */
export type CheckaTuSaludOrganizacionProps =
  SliceComponentProps<Content.CheckaTuSaludOrganizacionSlice>;

/**
 * Component for "CheckaTuSaludOrganizacion" Slices.
 */
const CheckaTuSaludOrganizacion = ({
  slice,
}: CheckaTuSaludOrganizacionProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for checka_tu_salud_organizacion (variation:{" "}
      {slice.variation}) Slices
    </section>
  );
};

export default CheckaTuSaludOrganizacion;
