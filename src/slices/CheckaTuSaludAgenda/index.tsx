import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `CheckaTuSaludAgenda`.
 */
export type CheckaTuSaludAgendaProps =
  SliceComponentProps<Content.CheckaTuSaludAgendaSlice>;

/**
 * Component for "CheckaTuSaludAgenda" Slices.
 */
const CheckaTuSaludAgenda = ({
  slice,
}: CheckaTuSaludAgendaProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for checka_tu_salud_agenda (variation:{" "}
      {slice.variation}) Slices
    </section>
  );
};

export default CheckaTuSaludAgenda;
