import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `NosotrosSlider`.
 */
export type NosotrosSliderProps =
  SliceComponentProps<Content.NosotrosSliderSlice>;

/**
 * Component for "NosotrosSlider" Slices.
 */
const NosotrosSlider = ({ slice }: NosotrosSliderProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for nosotros_slider (variation: {slice.variation})
      Slices
    </section>
  );
};

export default NosotrosSlider;
