import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `CheckaTuSaludSlider`.
 */
export type CheckaTuSaludSliderProps =
  SliceComponentProps<Content.CheckaTuSaludSliderSlice>;

/**
 * Component for "CheckaTuSaludSlider" Slices.
 */
const CheckaTuSaludSlider = ({
  slice,
}: CheckaTuSaludSliderProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for checka_tu_salud_slider (variation:{" "}
      {slice.variation}) Slices
    </section>
  );
};

export default CheckaTuSaludSlider;
