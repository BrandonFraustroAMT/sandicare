'use client'
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import './Servicios.css'
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { useState } from "react";
import Image from "next/image";
import iconcheck from '../../assets/images/icons8-de-acuerdo-30.png'

/**
 * Props for `ServiciosHome`.
 */
export type ServiciosHomeProps =
  SliceComponentProps<Content.ServiciosHomeSlice>;

/**
 * Component for "ServiciosHome" Slices.
 */
const ServiciosHome = ({ slice }: ServiciosHomeProps): JSX.Element => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(0);
  
  const handleItemIndex = (index: number) => {
    setSelectedIndex(index);
  }

  const handleClick = (label: string) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'click', {
        event_category: 'Button',
        event_label: label,
      });
    }
  };

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
              {slice.primary.groupservicioshome.map((item, index) => (
                <>
                  <div key={index} className="servicios-slice__text" onClick={() => handleItemIndex(index)}>
                    <>{item.firstlabel}</>
                  </div>
                </>
              ))}
            </>
          </div>
          {selectedIndex !== null && (
            <div className="servicios-slice__list-box">
                    <div className="servicios-slice__column">
                      <div className="servicios-slice__list-title">
                        <>{slice.primary.groupservicioshome[selectedIndex].title}</>
                      </div>
                      <div className="servicios-slice__list-subtitle">
                        <>{slice.primary.groupservicioshome[selectedIndex].subtitle}</>
                      </div>
                      <div className="servicios-slice__list-description">
                        <>{slice.primary.groupservicioshome[selectedIndex].description}</>
                      </div>

                      <div className="servicios-slice__item-list">
                        <div className="servicios-slice__item">
                          <div className="servicios-slice__item-data">
                            <div className="servicios-slice__icon">
                              <Image src="/assets/images/icons8-de-acuerdo-30.png" alt={"icon"} width={30} height={30} />
                              {/* <img src="../../assets/images/icons8-de-acuerdo-30.png" alt="check" /> */}
                            </div>
                            <>{slice.primary.groupservicioshome[selectedIndex].list1}</>
                          </div>
                          <div className="servicios-slice__item-data">
                            <div className="servicios-slice__icon">
                              <Image src="/assets/images/icons8-de-acuerdo-30.png" alt={"icon"} width={30} height={30} />
                              {/* <img src="../../assets/images/icons8-de-acuerdo-30.png" alt="check" /> */}
                            </div>
                            <>{slice.primary.groupservicioshome[selectedIndex].list2}</>
                          </div>
                          <div className="servicios-slice__item-data">
                            <div className="servicios-slice__icon">
                              <Image src="/assets/images/icons8-de-acuerdo-30.png" alt={"icon"} width={30} height={30} />
                              {/* <img src="../../assets/images/icons8-de-acuerdo-30.png" alt="check" /> */}
                            </div>
                            <>{slice.primary.groupservicioshome[selectedIndex].list3}</>
                          </div>
                        </div>
                        <div className="servicios-slice__item">
                          <div className="servicios-slice__item-data">
                            <div className="servicios-slice__icon">
                              <Image src="/assets/images/icons8-de-acuerdo-30.png" alt={"icon"} width={30} height={30} />
                              {/* <img src="../../assets/images/icons8-de-acuerdo-30.png" alt="check" /> */}
                            </div>
                            <>{slice.primary.groupservicioshome[selectedIndex].list4}</>
                          </div>
                          <div className="servicios-slice__item-data">
                            <div className="servicios-slice__icon">
                              <Image src="/assets/images/icons8-de-acuerdo-30.png" alt={"icon"} width={30} height={30} />
                              {/* <img src="../../assets/images/icons8-de-acuerdo-30.png" alt="check" /> */}
                            </div>
                            <>{slice.primary.groupservicioshome[selectedIndex].list5}</>
                          </div>
                          <div className="servicios-slice__item-data">
                            <div className="servicios-slice__icon">
                              <Image src="/assets/images/icons8-de-acuerdo-30.png" alt={"icon"} width={30} height={30} />
                              {/* <img src="../../assets/images/icons8-de-acuerdo-30.png" alt="check" /> */}
                            </div>
                            <>{slice.primary.groupservicioshome[selectedIndex].list6}</>
                          </div>
                        </div>
                      </div>

                      <div className="servicios-slice__buttons">
                        <PrismicNextLink field={slice.primary.groupservicioshome[selectedIndex].linkbutton1} className="servicios-slice__link"
                          onClick={() => handleClick(slice.primary.groupservicioshome[selectedIndex].labelbutton1 ?? 'Default Label')}>
                          <>{slice.primary.groupservicioshome[selectedIndex].labelbutton1}</>
                        </PrismicNextLink>
                        <PrismicNextLink field={slice.primary.groupservicioshome[selectedIndex].linkbutton2} className="servicios-slice__link"
                          onClick={() => handleClick(slice.primary.groupservicioshome[selectedIndex].labelbutton2 ?? 'Default Label')}>
                          <>{slice.primary.groupservicioshome[selectedIndex].labelbutton2}</>
                        </PrismicNextLink>
                      </div>
                    </div>
                    <div className="servicios-slice__column">
                      <div className="servicios-slice__img">
                        <PrismicNextImage field={slice.primary.groupservicioshome[selectedIndex].image} />
                      </div>
                    </div>
            </div>
          )
          }
        </div>
      </div>
    </section>
  );
};

export default ServiciosHome;
