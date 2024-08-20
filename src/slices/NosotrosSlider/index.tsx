import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

import './Nosotrosslider.css'
import { PrismicNextImage } from "@prismicio/next";
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
      <div className="nosotrosslider">
        <div className="nosotrosslider-container">
          <div className="nosotrosslider-columns" >
            <>
              {slice.primary.groupslider.map((item, index) => (
                // Render the item
                  <div className="nosotrosslider-column" key={index}>
                    {
                      index % 2 == 0 ? (
                        <>
                            <div className="nosotrosslider-col">
                              <div className="nosotrosslider-subtitle"><>{item.subtitle}</></div>
                              <div className="nosotrosslider-text"><>{item.text}</></div>
                            </div>
                            <div className="nosotrosslider-col">
                              <div className="nosotrosslider-image">
                                <PrismicNextImage field={item.image} />
                              </div>
                            </div>
                        </>
                      ) : (
                        <>
                            <div className="nosotrosslider-col">
                              <div className="nosotrosslider-image">
                                <PrismicNextImage field={item.image} />
                              </div>
                            </div>
                            <div className="nosotrosslider-col">
                              <div className="nosotrosslider-subtitle"><>{item.subtitle}</></div>
                              <div className="nosotrosslider-text"><>{item.text}</></div>
                            </div>
                        </>
                      )
                    }
                  </div>
              ))}
            </>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NosotrosSlider;
