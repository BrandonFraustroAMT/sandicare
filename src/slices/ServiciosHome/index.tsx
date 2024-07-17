import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import './Servicios.css'
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";

/**
 * Props for `ServiciosHome`.
 */
export type ServiciosHomeProps =
  SliceComponentProps<Content.ServiciosHomeSlice>;

/**
 * Component for "ServiciosHome" Slices.
 */
const ServiciosHome = ({ slice }: ServiciosHomeProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="servicios-slice">
        <div className="servicios-slice__container">
          <div className="servicios-slice__title">
            <h2>
              <PrismicRichText field={slice.primary.title} />
            </h2>
          </div>
          <div className="servicios-slice__subtitle">
            <>{slice.primary.subtitle}</>
          </div>
          <div className="servicios-slice__list">
            <>
              {slice.primary.groupservicioshome.map((item) => (
                <>
                  <div className="servicios-slice__text">
                    <>{item.firstlabel}</>
                  </div>
                </>
              ))}
            </>
          </div>
          <div className="servicios-slice__list-box">
            <>
              {slice.primary.groupservicioshome.map((item) => (
                <>
                  <div className="servicios-slice__column">
                    <div className="servicios-slice__list-title">
                      <>{item.title}</>
                    </div>
                    <div className="servicios-slice__list-subtitle">
                      <>{item.subtitle}</>
                    </div>
                    <div className="servicios-slice__list-description">
                      <>{item.description}</>
                    </div>

                    <div className="servicios-slice__item-list">
                      <div className="servicios-slice__item">
                        <div><>{item.list1}</></div>
                        <div><>{item.list2}</></div>
                        <div><>{item.list3}</></div>
                      </div>
                      <div className="servicios-slice__item">
                        <div><>{item.list4}</></div>
                        <div><>{item.list5}</></div>
                        <div><>{item.list6}</></div>
                      </div>
                    </div>

                    <div className="servicios-slice__buttons">
                      <PrismicNextLink field={item.linkbutton1} className="servicios-slice__link">
                        <>{item.labelbutton1}</>
                      </PrismicNextLink>
                      <PrismicNextLink field={item.linkbutton2} className="servicios-slice__link">
                        <>{item.labelbutton2}</>
                      </PrismicNextLink>
                    </div>
                  </div>
                  <div className="servicios-slice__column">
                    <div className="servicios-slice__img">
                      <PrismicNextImage field={item.image} />
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

export default ServiciosHome;
