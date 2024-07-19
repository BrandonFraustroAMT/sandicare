import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

import './CheckatSlider.css';
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
      <div className="checkat-slider">
        <div className="checkat-slider__container">
          <div className="checkat-slider__column">
            <>
              {slice.primary.groupslider.map((item) => (
                // Render the item
                <>
                  <div className="checkat-slider__box">
                    <div className="checkat-slider__column1">
                      <div className="checkat-slider__list1">
                        <div className="checkat-slider__icon">
                          <PrismicNextImage field={item.icon} />
                        </div>
                        <div className="checkat-slider__number">
                          <>{item.number}</>
                        </div>
                      </div>
                      <div className="checkat-slider__list2">
                        <div className="checkat-slider__title">
                          <h2><PrismicRichText field={item.title} /></h2>
                        </div>
                        <div className="checkat-slider__description">
                          <>{item.description}</>
                        </div>
                      </div>
                    </div>
                    <div className="checkat-slider__column2">
                      <div className="checkat-slider__img">
                        <PrismicNextImage field={item.image} />
                      </div>
                    </div>
                  </div>
                </>
              ))}
            </>

          </div>
        </div>
      </div>
    </section>
  );
};

export default CheckaTuSaludSlider;
