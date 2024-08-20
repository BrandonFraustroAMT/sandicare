import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `UneteAlEquipo`.
 */
export type UneteAlEquipoProps =
  SliceComponentProps<Content.UneteAlEquipoSlice>;

/**
 * Component for "UneteAlEquipo" Slices.
 */
const UneteAlEquipo = ({ slice }: UneteAlEquipoProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for unete_al_equipo (variation: {slice.variation})
      Slices
    </section>
  );
};

export default UneteAlEquipo;
